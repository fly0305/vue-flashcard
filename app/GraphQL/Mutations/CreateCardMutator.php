<?php

namespace App\GraphQL\Mutations;

use App\Card;
use App\Deck;
use Exception;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Validator;
use Nuwave\Lighthouse\Exceptions\ValidationException;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class CreateCardMutator
{
    /**
     * Return a value for the field.
     *
     * @param  null  $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param  mixed[]  $args The arguments that were passed into the field.
     * @param  \Nuwave\Lighthouse\Support\Contracts\GraphQLContext  $context Arbitrary data that is shared b ,etween all fields of a single query.
     * @param  \GraphQL\Type\Definition\ResolveInfo  $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @return mixed
     */
    public function __invoke($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo) : Card
    {
        $validator = Validator::make($args, [
            'deck_id' => ['required', 'integer', 'exists:decks,id',
            function ($attribute, $value, $fail) {
                if (Deck::find($value)->cards()->count() >= 50) {
                    $fail('Deck cannot have more than 50 cards.');
                }
            }, ],
            'question' => ['string', 'max:255', 'nullable'],
            'answer' => ['string', 'max:255', 'nullable'],
            'example_question' => ['string', 'max:255', 'nullable'],
            'example_answer' => ['string', 'max:255', 'nullable'],
            'image' => ['string', 'nullable'],
            'image_file' => ['image', 'nullable'],
            ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        $deck = Deck::findOrFail($args['deck_id']);

        $card = $deck->cards()->create($args);

        if ($args['image_file']) {
            try {
                $card->addMedia($args['image_file'])->toMediaCollection('main');
            } catch (Exception $e) {
                $error = ValidationException::withMessages([
                        'image' => ['Try upload other image.'],
                     ]);
                throw $error;
            }
        } elseif ($args['image']) {
            try {
                $url = '';
                $media = $card->getFirstMedia('main');
                if ($media) {
                    $url = $media->getFullUrl();
                }
                if ($args['image'] !== $url) {
                    $card->addMediaFromUrl($args['image'])->toMediaCollection('main');
                }
            } catch (Exception $e) {
                $error = ValidationException::withMessages([
                        'image' => ['Try add other image URL.'],
                     ]);
                throw $error;
            }
        }

        return $card;
    }
}
