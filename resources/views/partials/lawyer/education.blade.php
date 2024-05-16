<div class="card">
    <h3 class="font-bold">
        Formación profesional
    </h3>
    <ul class="flex flex-col gap-y-3 mt-5">
        <li>
            <i class="fa-solid fa-school text-gray-500 mr-1"></i>
            {{ $lawyer->profile->school }}
        </li>
        <li>
            <i class="fa-solid fa-graduation-cap text-gray-500 mr-1"></i>
            {{ $lawyer->profile->degree->name }}
        </li>
    </ul>
</div>
