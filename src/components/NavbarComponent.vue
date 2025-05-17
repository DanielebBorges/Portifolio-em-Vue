<template>
    <nav class="bg-zinc-950 text-white py-4 px-8 flex justify-between items-center">
        <h1 class="text-lg font-bold flex items-center gap-2">   
            <img src="/public/favicon.svg" alt="Ícone" class="h-6 w-6"/>
            Portifolio
        </h1>
        <ul class="flex gap-6">
            <li><router-link to="/" class="hover:text-[#a352ad]">Home</router-link></li>
            <li><router-link to="/sobre" class="hover:text-[#a352ad]">Sobre</router-link></li>
            <li><router-link to="/projeto" class="hover:text-[#a352ad]">Projetos</router-link></li>
            <li><a href="/docs/CV_Daniele_Borges.pdf" download class="hover:text-[#a352ad]">Baixar Curriculo</a></li>
            <li><router-link to="/contato" class="bg-[#a352ad] rounded-full py-3 px-7 transition duration-300 hover:bg-[#9000a3] ">Contato</router-link></li>
        </ul>
    </nav>
</template>