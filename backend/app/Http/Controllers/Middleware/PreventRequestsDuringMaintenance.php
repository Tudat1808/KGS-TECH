<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance as Middleware;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

class PreventRequestsDuringMaintenance extends Middleware
{
    /**
     * Render a custom maintenance mode response.
     *
     * @param  Request  $request
     * @return Response
     */
    protected function renderHttpException($e)
    {
        return response()->view('maintenance', [], 503);
    }
}
