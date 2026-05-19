import Footer from '../../compenent/footer/Footer';
import Header from '../../compenent/header/Header';

export default function Home() {
    return (
        <>
        <Header />
        <main className='flex flex-col h-full bg-[#111417]'>
            <section className='flex flex-col items-start mt-8 px-3 sm:px-5 md:px-15 lg:px-30 xl:px-40'>
                <h1 className='text-3xl font-bold text-white max-w-lg'>INTELIGÊNCIA LÓGICA APLICADA À <span className='text-[#00BFFF]'>SEGURANÇA PÚBLICA</span></h1>
                <p>Decisões mais rápidas, regras mais inteligentes</p>
            </section>
            
        </main>
        
        <Footer />
        </>
        )
}