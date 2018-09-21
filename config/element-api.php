<?php

use craft\commerce\elements\Product;

return [
    "endpoints" => [
        "experiences.json" => function() {
            return [
                "elementType" => Product::class,
                "criteria" => ["type" => "experience"],
                "transformer" => function(Product $product) {

                    foreach ($product->experienceFeaturedImage as $image) {
                        $featuredImage = $image->url;
                    }

                    return [
                        "featuredImage" => $featuredImage,
                        "id" => $product->id,
                        "title" => $product->title,
                        "slug" => $product->slug,
                        "uri" => $product->uri,
                        "descTop" => $product->experienceFeaturedDescriptionTop,
                        "descBottom" => $product->experienceFeaturedDescriptionBottom,
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

                    foreach ($product->experienceFeaturedImage as $image) {
                        $featuredImage = $image->url;
                    }
                    return [
                        "test" => $product,
                        "product" => [
                            "featuredImage" => $featuredImage,
                            "slub" => $product->slug,
                            "title" => $product->title,
                            "uri" => $product->uri
                        ],
                        "tiers" => $product->variants
                    ];
                }
            ];
        }
    ]
];