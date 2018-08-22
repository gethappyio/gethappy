<?php

use craft\commerce\elements\Product;

return [
    "endpoints" => [
        "experience.json" => function() {
            return [
                "elementType" => Product::class,
                "criteria" => ["type" => "experience"],
                "transformer" => function(Product $product) {
                    return [
                        "id" => $product->id,
                        "title" => $product->title,
                        "tiers" => $product->variants
                    ];
                }
            ];
        }
    ]
];