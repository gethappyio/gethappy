<?php
namespace modules\gethappy\base;

use yii\base\Behavior;

/**
 * Class Currency
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 2.0
 */
class Session extends Behavior
{
    public function addSession($key, $value)
    {
        return craft()->httpSession->add($key, $value);
    }

    public function getSession($key)
    {
        return craft()->httpSession->get($key); 
    }
}
