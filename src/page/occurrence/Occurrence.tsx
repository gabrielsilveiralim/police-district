import Footer from '../../compenent/footer/Footer';
import Header from '../../compenent/header/Header';
import { AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { analyzePriority } from '../../utils/analyzePriority';

export default function Occurrence() {

    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [hour, setHour] = useState('');
    const [priority, setPriority] = useState('');

    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <>
            <Header />
            <main className='bg-[#03101e] py-16 '> 
                <section className='mx-auto max-w-5xl rounded-3xl border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-8'>
                    <div className='mb-10'>
                        <span className='px-2 py-2 text-xs tracking-[0.2em] text-[#FF4D4D]'>
                            CENTRAL DE SEGURANÇA
                        </span>
                        <h1 className='mt-6 text-4xl font-black leading-tight text-white '>
                            CENTRAL DE <span className='text-[#FF3B3B]'> DENÚNCIAS INTELIGENTES </span>
                        </h1>
                        <p className='mt-5 max-w-2xl text-sm leading-5 text-[#BBC9CF]'>
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

                    <div className='mb-12'>
                        <div className='flex items-center justify-between'>
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className='flex flex-1 items-center'>
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold transition-all
                                            ${ step >= item
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-white/10 text-[#BBC9CF]'
                                            }`}>
                                        {item}
                                    </div>

                                    {item < 4 && (
                                        <div className={`h-1 flex-1 mx-2 rounded-full
                                                ${ step > item
                                                        ? 'bg-red-500'
                                                        : 'bg-white/10'
                                                }`}/>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className='mt-4 flex justify-between text-xs tracking-wide text-[#BBC9CF]'>
                            <span>Ocorrência</span>
                            <span>Local</span>
                            <span>Complemento</span>
                            <span>Relato</span>
                        </div>
                    </div>

                    {step === 1 && (
                        <div className='grid gap-6 md:grid-cols-2'>
                            <div className='flex flex-col gap-3'>
                                <label className='text-sm text-[#BBC9CF]'> Tipo da ocorrência </label>
                                <select value={type} onChange={(e) => setType(e.target.value)} className='rounded-xl bg-[#03101e] p-3 text-white' required>
                                    <option>Furto</option>
                                    <option>Roubo</option>
                                    <option>Violência</option>
                                    <option>Arma de fogo</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <label className='text-sm text-[#BBC9CF]'> Horário </label>
                                <input type='time' value={hour} onChange={(e) => setHour(e.target.value)} className='rounded-xl bg-[#03101e] p-3 text-white' required />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className='grid gap-4 md:grid-cols-2'>
                            <input placeholder='Estado' className='rounded-xl bg-white/5 p-3 text-white'/>
                            <input placeholder='Cidade' className='rounded-xl bg-white/5 p-3 text-white' />
                            <input placeholder='Bairro' className='rounded-xl bg-white/5 p-3 text-white' />
                            <input placeholder='Endereço' className='rounded-xl bg-white/5 p-3 text-white' />
                        </div>
                    )}

                    {step === 3 && (
                        <div className='space-y-4'>
                            <input  placeholder='Nome da vítima' className='w-full rounded-xl bg-white/5 p-3 text-white'/>
                            <input placeholder='Suspeito conhecido' className='w-full rounded-xl bg-white/5 p-3 text-white' />
                            <input type='file' multiple className='w-full rounded-xl border border-dashed border-red-500/30 p-5 text-white' />
                        </div>
                    )}

                    {step === 4 && (
                        <div className='space-y-4'>
                            <textarea rows={8} value={description} onChange={(e) => setDescription(e.target.value)}
                                placeholder='Descreva detalhadamente a ocorrência...' className='w-full rounded-2xl bg-white/5 p-5 text-white' />
                        </div>
                    )}

                    <div className='mt-10 flex justify-between'>
                        {step > 1 ? (
                            <button type='button' onClick={prevStep} className='rounded-xl bg-white/10 px-6 py-3 text-white'>
                                Voltar
                            </button>
                        ) : (
                            <div />
                        )}
                        {step < 4 ? (
                            <button type='button' onClick={nextStep} className='rounded-xl bg-red-500 px-6 py-3 text-white' >
                                Próximo
                            </button>
                        ) : (
                            <button type='submit'
                                onClick={() => {
                                    const calculatedPriority = analyzePriority(type, description, hour);
                                    setPriority(calculatedPriority);
                                    setIsOpen(true);
                                }}
                                className='rounded-xl bg-red-500 px-8 py-3 font-bold text-white'>
                                Enviar Denúncia
                            </button>
                        )}
                    </div>
                </section>

                {isOpen && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4'>
                        <div className='relative w-full max-w-md overflow-hidden rounded-3xl border border-red-500/20 bg-linear-to-rfrom-[#07111F] via-[#120A0A] to-[#2A0F0F] p-8'>
                            <div className='absolute top-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/20 blur-[80px]'/>
                            <div className='relative z-10 flex flex-col items-center text-center'>
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