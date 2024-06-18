@if ($lawyer->profile->verified_at)
    <div
        class="bg-gradient-to-r from-green-700 to-teal-600 font-medium text-white text-center uppercase border-t-2 border-teal-400 py-2 px-4">
        Perfil verificado
    </div>
@else
    <div class="bg-red-500 font-medium text-white text-center uppercase py-2 px-4">
        Perfil no verificado
    </div>
@endif
