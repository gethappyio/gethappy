<?php

use craft\commerce\elements\Product;

return [
    "endpoints" => [
        "experiences.json" => function() {
            return [
                "elementType" => Product::class,
                "criteria" => ["type" => "experience"],
                "transformer" => function(Product $product) {
                    return [
                        "id" => $product->id,
                        "title" => $product->title,
                        "slug" => $product->slug,
                        "tiers" => $product->variants
                    ];
                }
            ];
        },
        "experience/<slug>.json" => function($slug) {
            return [
                "elementType" => Product::class,
                "criteria" => ["type" => "experience", "slug" => $slug],
                "one" => true,
                "transformer" => function(Product $product) {
                    return [
                        "product" => $product,
                        "tiers" => $product->variants
                    ];
                }
            ];
        }
    ]
];