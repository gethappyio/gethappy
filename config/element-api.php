<?php

use craft\commerce\elements\Product;
use craft\elements\GlobalSet;
use craft\helpers\UrlHelper;

return [
    "endpoints" => [
        "homeslider.json" => function() {
            return [
                "elementType" => GlobalSet::class,
                "criteria" => [
                    "handle"    => "homeSlider"
                ],
                "one" => true,
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
                    return [
                        "slides" => $blocks
                    ];
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

                    $featuredVideoThumbnail = null;
                    if ($product->experienceVideoThumbnail) {
                        foreach ($product->experienceVideoThumbnail as $thumbnail) {
                            $featuredVideoThumbnail = $thumbnail->url;
                        }
                    }
                    
                    $featuredVideo = null;
                    if ($product->experienceVideo) {
                        foreach ($product->experienceVideo as $video) {
                            $featuredVideo = $video->url;
                        }
                    }

                    foreach ($product->experienceFeaturedImage as $image) {
                        $featuredImage = $image->url;
                    }

                    $currentDate = new DateTime("NOW");
                    $endDate = $product->experienceEndDate;
                    $diffDays = $currentDate->diff($endDate)->days;

                    $blocks = [];
                    foreach ($product->experienceLayoutBuilder as $block) {
                        $newBlock = [];
                        $newBlock["handle"] = $block->type->name;

                        switch ($block->type->name) {
                            case "Text":
                                $newBlock["block"]["header"] = $block->header;
                                $newBlock["block"]["body"] = $block->body;
                            break;

                            case "Image":
                                foreach ($block->image as $image) {
                                    $imageUrl = $image->url;
                                }
                                $newBlock["block"]["image"] = $imageUrl;
                            break;
                        }

                        $blocks[] = $newBlock;
                    }

                    // Free Gifts
                    $variantsArray = [];

                    foreach($product->variants as $variant) {
                        $variantObject = [];
                        
                        if(count($variant->tierGift) > 0) {
                            $gift = $variant->tierGift->first();

                            foreach ($gift->giftImage as $image) {
                                $giftImage = $image->url;
                            }

                            $giftObject = [
                                "title" => $gift->title,
                                "image" => $giftImage,
                                "stock" => $gift->totalStock
                            ];


                            $variantObject["tierGift"] = $giftObject;
                        }

                        $variantObject["price"] = $variant->price;
                        $variantObject["tierDescription"] = $variant->tierDescription;
                        $variantObject["tierEntries"] = $variant->tierEntries;
                        $variantObject["tierTitle"] = $variant->tierTitle;
                        $variantObject["title"] = $variant->title;
                        $variantObject["id"] = $variant->id;

                        $variantsArray[] = $variantObject; 
                    }
                    
                    return [
                        "layout" => $blocks,
                        "product" => [
                            "days" => $diffDays,
                            "featuredVideoThumbnail" => $featuredVideoThumbnail,
                            "featuredVideo" => $featuredVideo,
                            "featuredImage" => $featuredImage,
                            "slub" => $product->slug,
                            "title" => $product->title,
                            "desc" => $product->experienceFeaturedDescription,
                            "uri" => $product->uri,
                            "url" => UrlHelper::siteUrl() . $product->uri
                        ],
                        "tiers" => $variantsArray
                    ];
                }
            ];
        }
    ]
];