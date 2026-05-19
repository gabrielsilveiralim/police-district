
export default function Footer() {
  return (
    <footer className='w-full border-t border-white/10 bg-[#07111F] text-[#E5E7EB]'>
      <section className='mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between'>
        
        <div className='space-y-2'>
          <h3 className='text-xl font-bold tracking-wide text-white'>LOGIC SÃO LUÍS</h3>
          <p className="max-w-md text-xs text-gray-400">
            Plataforma inteligente de monitoramento criminal e análise
            operacional conectada aos distritos policiais de São Luís.
          </p>
          <p className="text-xs text-gray-500">
            © 2026 Secretaria de Segurança Pública — São Luís
          </p>
        </div>

        <div className='flex flex-col gap-2 text-xs text-gray-300'>
          <a href="#" className='transition duration-300 hover:text-[#00BFFF]'>Sistema de Privacidade</a>
          <a href="#" className='transition duration-300 hover:text-[#00BFFF]'>Política e Termos de Uso</a>
          <a href="#" className='transition duration-300 hover:text-[#FF4D4D]'>Contato</a>
        </div>
      </section>
    </footer>
  );
}