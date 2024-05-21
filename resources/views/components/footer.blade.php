<div class="w-full bg-zinc-800 text-neutral-100 mx-auto px-8 py-10">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-20 md:py-5">
        <div class="col-span-2">
            <a href="#_" class="text-2xl font-black leading-none super-title select-none logo">
                {{ config('app.name') }}
            </a>
            <p class="my-4 leading-normal">
                Con presencia en toda la república mexicana.
            </p>
        </div>
        <nav class="flex flex-col gap-2">
            <p class="text-xs font-semibold text-primary uppercase">
                Nosotros
            </p>
            <a href="#" class="text-sm font-medium transition hover:text-white">
                Acerca del directorio
            </a>
            <a href="#" class="text-sm font-medium transition hover:text-white">
                Preguntas frecuentes
            </a>
        </nav>
        <nav class="flex flex-col gap-2">
            <p class="text-xs font-semibold text-primary uppercase">
                Contacto
            </p>
            <a href="https://chat.whatsapp.com/BUx73Cuvb0vL0eI5qjeS51" target="_BLANK"
                class="text-sm font-medium transition hover:text-white">
                Whatsapp
            </a>
            <a href="mailto:directorio@softwzi.com" target="_BLANK"
                class="text-sm font-medium transition hover:text-white">
                Correo electrónico
            </a>
        </nav>
        <div>
            <div class="w-full inline-flex justify-center gap-5">
                <a href="https://www.facebook.com/profile.php?id=61554245535659&mibextid=LQQJ4d" target="_BLANK"
                    class="text-yellow-100 hover:text-white">
                    <i class="fa-brands fa-facebook text-xl"></i>
                </a>
                <a href="https://www.instagram.com/directorio_nacionalde_abogados?igsh=N2UxcmlxbXlyb2Fq&utm_source=qr"
                    target="_BLANK" class="text-yellow-100 hover:text-white">
                    <i class="fa-brands fa-instagram text-xl"></i>
                </a>
            </div>
        </div>
    </div>
    <div
        class="flex flex-col md:flex-row md:items-center justify-between border-t border-zinc-700 text-neutral-100 mt-10 pt-5">
        <p class="text-sm">
            © Copyright {{ date('Y') }} Softwzi. All Rights Reserved.
        </p>
        <div class="flex items-center gap-5">
            <a href="{{ route('terms') }}" class="text-sm transition hover:text-white">
                Términos y condiciones
            </a>
            <a href="{{ route('privacy') }}" class="text-sm transition hover:text-white">
                Política de privacidad
            </a>
        </div>
    </div>
</div>
