<?php
namespace modules\gethappy;

use modules\gethappy\base\Session;
use craft\web\twig\variables\CraftVariable;
use yii\base\Event;

class GethappyModule extends \yii\base\Module
{
    public function init()
    {
        parent::init();

        Event::on(CraftVariable::class, CraftVariable::EVENT_INIT, function(Event $e) {
            /** @var CraftVariable $variable */
            $variable = $e->sender;
            
            // Attach a behavior:
            $variable->attachBehaviors([
                Session::class,
            ]);
        });
    }
}