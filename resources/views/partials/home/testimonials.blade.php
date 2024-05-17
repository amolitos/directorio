<section class="container p-5 md:p-10">
    <h3 class="font-bold text-3xl md:text-4xl text-secondary dark:text-neutral-100 text-center">
        ¿Qué opinan otros abogados?
    </h3>
    <p class="font-medium md:text-lg text-neutral-400 text-center mt-5">
        Nos reconocen como la mejor opción
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 md:mt-10">
        @for ($i = 0; $i < 4; $i++)
            <blockquote
                class="bg-white dark:bg-zinc-800 flex flex-col md:flex-row-reverse items-center md:justify-between gap-3 rounded-md shadow-sm p-5">
                <img src="{{ asset('images/lawyer.jpg') }}" class="object-cover w-20 md:w-24 h-20 md:h-24 rounded-full">
                <div class="flex flex-col pr-8">
                    <div class="relative pl-12">
                        <i class="fa-solid fa-quote-left absolute left-0 text-4xl text-primary"></i>
                        <p class="text-gray-500 dark:text-indigo-100 mt-2">
                            Es la mejor plataforma de abogados
                        </p>
                    </div>
                    <h3 class="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 dark:text-gray-400 truncate">
                        Ernesto López <span class="text-sm text-gray-500"> - Abogado</span>
                    </h3>
                </div>
            </blockquote>
        @endfor
    </div>
    <a href="{{ route('search') }}"
        class="btn btn-primary block w-fit mt-8 md:mt-14 mx-auto py-3 md:py-5 px-5 md:px-6">
        BUSCAR ABOGADO
    </a>
</section>
