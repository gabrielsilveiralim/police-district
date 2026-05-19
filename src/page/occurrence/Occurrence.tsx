import Footer from '../../compenent/footer/Footer';
import Header from '../../compenent/header/Header';
import { ShieldAlert, MapPin, Clock3, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { analyzePriority } from '../../utils/analyzePriority';

export default function Occurrence() {

    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [hour, setHour] = useState('');
    const [priority, setPriority] = useState('');

    return (
        <>
            <Header />
            <main className='bg-[#03101e] py-16 '> 
                <section className='mx-auto max-w-5xl rounded-3xl border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-8 shadow-2xl backdrop-blur-md'>
                    <div className='mb-10'>
                        <span className='px-2 py-2 text-xs tracking-[0.2em] text-[#FF4D4D]'>
                            CENTRAL DE SEGURANÇA
                        </span>
                        <h1 className='mt-6 text-4xl font-black leading-tight text-white '>
                            CENTRAL DE <span className='text-[#FF3B3B]'> DENÚNCIAS INTELIGENTES </span>
                        </h1>
                        <p className='mt-5 max-w-2xl text-sm leading-7 text-[#BBC9CF]'>
                            Plataforma integrada ao distrito policial
                            responsável por receber, classificar e encaminhar
                            denúncias automaticamente conforme o nível
                            de prioridade e risco da ocorrência.
                        </p>
                    </div>

                    <div className='mb-10 flex items-center gap-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-5'>
                        <AlertTriangle className='text-[#FF4D4D]' size={24} />
                        <p className='text-sm text-[#FFD2D2]'>
                            Ocorrências envolvendo armas, violência ou
                            risco imediato recebem prioridade máxima
                            automaticamente.
                        </p>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault();
                        const result = analyzePriority( type, description, hour);
                            setPriority(result); setIsOpen(true);}}
                            className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                                
                        <div className='flex flex-col gap-3'>
                            <label  className='text-sm font-medium text-[#BBC9CF]'> Nome da Vítima </label>
                            <input type='text' placeholder='Digite o nome da vítima' className=' rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-[#7B8A90] focus:border-[#FF3B3B] focus:bg-white/10'/>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-sm font-medium text-[#BBC9CF]'> Bairro da ocorrência </label>
                            <div className='relative'>
                                <MapPin size={18} className='absolute top-1/2 left-4 -translate-y-1/2 text-[#FF4D4D]'/>
                                <input type='text' placeholder='Ex: Cidade Operária' className='w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-4 pl-11 text-white outline-none transition-all placeholder:text-[#7B8A90] focus:border-[#FF3B3B] focus:bg-white/10'/>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-sm font-medium text-[#BBC9CF]'> Horário </label>
                            <div className='relative'>
                                <Clock3 size={18} className='absolute top-1/2 left-4 -translate-y-1/2 text-[#FF4D4D]'/>
                                <input value={hour} onChange={(e) => setHour(e.target.value)} type='time' className='w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-4 pl-11 text-white outline-none transition-all focus:border-[#FF3B3B] focus:bg-white/10'/>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-sm font-medium text-[#BBC9CF]'> Tipo da ocorrência </label>
                            <div className='relative'>
                                <ShieldAlert size={18} className='absolute top-1/2 left-4 -translate-y-1/2 text-[#FF4D4D]'/>
                                <select value={type} onChange={(e) => setType(e.target.value)} className='w-full rounded-xl border border-white/10 bg-white/5 py-3 pr-4 pl-11 text-white outline-none transition-all focus:border-[#FF3B3B] focus:bg-white/10'>
                                    <option className='bg-[#07111F]'> Furto </option>
                                    <option className='bg-[#07111F]'> Roubo </option>
                                    <option className='bg-[#07111F]'> Arma de fogo </option>
                                    <option className='bg-[#07111F]'> Violência </option>
                                    <option className='bg-[#07111F]'> Outro </option>
                                </select>
                            </div>
                        </div>

                        <div className='col-span-1 flex flex-col gap-3 md:col-span-2'>
                            <label className='text-sm font-medium text-[#BBC9CF]'> Descrição da denúncia </label>
                            <div className='relative'>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={7} placeholder='Descreva detalhadamente a ocorrência...' className='w-full rounded-2xl border border-white/10 bg-white/5 py-4 pr-4 pl-8 text-white outline-none transition-all duration-300 placeholder:text-[#7B8A90]'/>
                            </div>
                        </div>

                        <div className='md:col-span-2'>
                            <button type='submit'  className='relative w-full overflow-hidden rounded-2xl border border-red-500/30  bg-linear-to-r from-[#7A0000] via-[#B30000] to-[#FF1E1E] px-6 py-4 text-sm font-bold tracking-[0.15em] text-white cursor-pointer'>
                                <div className='absolute bg-linear-to-r from-transparent via-white/20 to-transparent'/>
                                <div className='relative flex items-center justify-center gap-3'>
                                    <span> ENVIAR DENÚNCIA URGENTE </span>
                                </div>
                            </button>
                            <p className='mt-4 text-center text-xs tracking-wide text-[#BBC9CF]'>
                                Sua denúncia será encaminhada automaticamente
                                para o distrito policial responsável.
                            </p>
                        </div>
                    </form>
                </section>

                {isOpen && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4'>
                        <div className='relative w-full max-w-md overflow-hidden rounded-3xl border border-red-500/20 bg-linear-to-rfrom-[#07111F] via-[#120A0A] to-[#2A0F0F] p-8'>
                            <div className='absolute top-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/20 blur-[80px]'/>
                            <div className='relative z-10 flex flex-col items-center text-center'>
                                <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 '>
                                    <ShieldAlert size={38} className='text-[#FF4D4D]'/>
                                </div>

                                <h2 className='text-3xl font-black text-white'> Denúncia enviada </h2>
                                <p className='mt-4 text-sm leading-7 text-[#BBC9CF]'>
                                    Sua ocorrência foi registrada
                                    com sucesso e encaminhada
                                    automaticamente para o distrito
                                    policial responsável.
                                </p>

                                <div className='mt-6 px-5 py-3'>
                                    <span className='text-xs font-bold tracking-[0.2em] text-[#FF4D4D]'> PRIORIDADE : {priority}</span>
                                </div>

                                <button onClick={() => setIsOpen(false)}
                                    className='mt-8 w-full rounded-2xl bg-linear-to-r from-[#7A0000] via-[#B30000] to-[#FF1E1E] px-6 py-4 text-sm font-bold tracking-[0.15em] text-white transition-all duration-300 hover:scale-[1.02]'>
                                    FECHAR
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}