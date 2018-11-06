<?php

use craft\commerce\elements\Product;
use craft\elements\GlobalSet;

return [
    "endpoints" => [
        "homeslider.json" => function() {
            return [
                "elementType" => GlobalSet::class,
                "criteria" => [
                    "handle"    => "homeSlider"
                ],
                "transformer" => function(GlobalSet $globalset) {
                    $blocks = [];
                    foreach ($globalset->homeSlides as $block) {
                        $newBlock = [];
                        foreach ($block->image as $image) {
                            $imageUrl = $image->url;
                        }
                        $newBlock['image'] = $imageUrl;
                        $newBlock['slideLink'] = $block->slideLink;
                        $blocks[] = $newBlock;
                    }
                    return $blocks;
                }
            ];
        },
        "experiences.json" => function() {
            return [
                "elementType" => Product::class,
                "criteria" => [
                    "type"    => "experience",
                    "orderBy" => "id asc"
                ],
                "transformer" => function(Product $product) {
                    foreach ($product->experienceFeaturedImage as $image) {
                        $featuredImage = $image->url;
                    }

                    $currentDate = new DateTime("NOW");
                    $endDate = $product->experienceEndDate;
                    $diffDays = $currentDate->diff($endDate)->days;

                    return [
                        "days" => $diffDays,
                        "featuredImage" => $featuredImage,
                        "id" => $product->id,
                        "title" => $product->title,
                        "slug" => $product->slug,
                        "uri" => $product->uri,
                        "desc" => $product->experienceFeaturedDescription,
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