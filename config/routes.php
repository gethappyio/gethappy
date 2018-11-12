<?php
/**
 * Site URL Rules
 *
 * You can define custom site URL rules here, which Craft will check in addition
 * to any routes you’ve defined in Settings → Routes.
 *
 * See http://www.yiiframework.com/doc-2.0/guide-runtime-routing.html for more
 * info about URL rules.
 *
 * In addition to Yii’s supported syntaxes, Craft supports a shortcut syntax for
 * defining template routes:
 *
 *     'blog/archive/<year:\d{4}>' => ['template' => 'blog/_archive'],
 *
 * That example would match URIs such as `/blog/archive/2012`, and pass the
 * request along to the `blog/_archive` template, providing it a `year` variable
 * set to the value `2012`.
 */

return [
    'about' => ['template' => 'index'],
    'checkout' => ['template' => 'checkout/index'],
    'checkout/success' => ['template' => 'checkout/index'],
    'checkout/login' => ['template' => 'checkout/login'],
    'contact' => ['template' => 'index'],
    'faq' => ['template' => 'index'],
    'terms' => ['template' => 'index'],
    'user' => ['template' => 'index'],
    'user/addresses' => ['template' => 'user/addresses/index'],
    'user/addresses/<url:(.*)>' => ['template' => 'user/addresses/index'],
    'user/profile' => ['template' => 'user/profile/index'],
    'user/orders' => ['template' => 'user/orders/index'],
    'user/orders/view/<url:(.*)>' => ['template' => 'user/orders/index']
];
