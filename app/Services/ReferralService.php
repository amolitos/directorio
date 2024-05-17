<?php

namespace App\Services;

use App\Models\ReferralCode;
use Illuminate\Support\Facades\Session;

class ReferralService
{
    /**
     * Store a referral code.
     *
     * @return void
     */
    public function checkReferralCode(): void
    {
        if (request()->has('referral_code')) {
            $referalCode = request()->referral_code;
            if (ReferralCode::where('code', $referalCode)->exists()) {
                Session::put('referral_code', $referalCode);
            }
        }
    }
}
