import Footer from '../../compenent/footer/Footer';
import Header from '../../compenent/header/Header';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const areas = [
        {
            name: 'Cidade Operária',
            position: [-2.5760, -44.1980],
            level: 'alto',
            crimes: 42
        },
        {
            name: 'Cohab',
            position: [-2.5420, -44.2180],
            level: 'médio',
            crimes: 17
        },
        {
            name: 'Liberdade',
            position: [-2.5286, -44.2877],
            level: 'alto',
            crimes: 31
        },
        {
            name: 'Turu',
            position: [-2.5195, -44.2260],
            level: 'baixo',
            crimes: 6
        }
    ];

    const getColor = (level: string) => {
        switch (level) {
            case 'alto':
                return '#FF4D4D';

            case 'médio':
                return '#FACC15';

            default:
                return '#22C55E';
        }
    };

    const mapOptions = {
        center: [-2.5307, -44.3068] as [number, number],
        zoom: 11,
        scrollWheelZoom: false
    };

    useEffect(() => {
        gsap.fromTo('#current-situation',
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0,
                duration: 1.2,
                ease: 'power3.out'
            }
        );

        gsap.fromTo('#map',
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0,
                duration: 1.2,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#map',
                    start: 'top 80%',
                    toggleActions: "play none none reset",
                }
            }
        );
    }, []);

    return (
        <>
        <Header />
        <main className='flex flex-col h-full bg-[#03101e]'>
            <section className='grid grid-cols-1 md:flex md:justify-between md:gap-10 mt-30 px-3 sm:px-5 md:px-15 lg:px-30 xl:px-40'>
                <div className=''>
                    <h1 className='text-3xl font-bold text-white max-w-lg'>INTELIGÊNCIA LÓGICA APLICADA À <span className='text-[#00BFFF]'>SEGURANÇA PÚBLICA</span></h1>
                    <p className='mt-6 max-w-2xl text-sm leading-6 text-[#BBC9CF]'> Plataforma inteligente de monitoramento e análise criminal desenvolvida
                        para auxiliar a segurança pública através de lógica proposicional,
                        priorização automática de ocorrências e visualização estratégica de dados.
                        O sistema conecta cidadãos e distritos policiais, permitindo o registro
                        rápido de denúncias, geração de alertas inteligentes e análise em tempo
                        real das regiões de maior risco da cidade de São Luís.</p>
                </div>

                <div id='current-situation' className='mt-10 w-full max-w-sm rounded-2xl border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-8 shadow-2xl backdrop-blur-md'>
                    <h2 className='mb-5 border-b border-white/10 pb-3 text-xs font-medium tracking-[0.2em] text-[#BBC9CF]'>
                        SITUAÇÃO ATUAL
                    </h2>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className=''>
                            <span className='text-3xl font-bold text-[#FF4D4D]'>
                                12
                            </span>
                            <p className='mt-1 text-xs text-[#BBC9CF]'>
                                Alertas críticos
                            </p>
                        </div>
                        <div className=''>
                            <span className='text-3xl font-bold text-[#22C55E]'>
                                23
                            </span>
                            <p className='mt-1 text-xs text-[#BBC9CF]'>
                                Viaturas ativas
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-20 px-3 sm:px-5 md:px-15 lg:px-30 xl:px-40'>
                <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-8 shadow-2xl backdrop-blur-md'>
                    <div className='absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#00BFFF]/10 blur-3xl' />
                    <div className='absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FF4D4D]/10 blur-3xl' />
                    <div className='relative'>
                        <span className='text-xs text-[#00BFFF]'>
                            SOBRE A PLATAFORMA
                        </span>
                        <div className='mt-8 gap-10 w-lg md:w-xl lg:w-2xl xl:w-3xl'>
                            <div>
                                <h2 className='max-w-xl text-3xl font-bold leading-tight text-white'>
                                        Tecnologia inteligente aplicada ao
                                        monitoramento e análise criminal
                                </h2>
                                <p className='mt-6 text-sm leading-7 text-[#BBC9CF]'>
                                        O LogicMA é uma plataforma desenvolvida para auxiliar
                                        a segurança pública através da coleta inteligente de
                                        denúncias, análise lógica das ocorrências e visualização
                                        estratégica de dados urbanos.
                                </p>
                                <p className='mt-4 text-sm leading-6 text-[#BBC9CF]'>
                                        O sistema permite que cidadãos realizem denúncias de
                                        forma rápida e segura, enquanto algoritmos de prioridade
                                        classificam automaticamente o nível de urgência das
                                        ocorrências com base em fatores como presença de arma,
                                        vítimas e fuga de suspeitos.
                                </p>
                                <p className='mt-4 text-sm leading-6 text-[#BBC9CF]'>
                                        Todas as informações são integradas ao dashboard
                                        operacional e ao mapa criminal da cidade de São Luís,
                                        auxiliando distritos policiais na tomada de decisão
                                        estratégica e no monitoramento de áreas críticas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='map' className='mt-24 mb-20 px-3 sm:px-5 md:px-15 lg:px-30 xl:px-40'>
                <div className='overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-6 shadow-2xl'>
                    <div className='mb-8 flex items-center justify-between'>
                        <div>
                            <h2 className='text-3xl font-bold text-white'>
                                Mapa criminal de São Luís
                            </h2>
                            <p className='mt-3 max-w-2xl text-sm leading-7 text-[#BBC9CF]'>
                                Visualização das regiões com maior
                                índice de ocorrências registradas pela plataforma.
                            </p>
                        </div>
                    </div>

                    <div className='h-96 overflow-hidden rounded-2xl border border-white/10'>
                        <MapContainer {...mapOptions} className='h-full w-full'>
                            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>

                            {areas.map((area, index) => (
                                <CircleMarker key={index} center={area.position as [number, number]} 
                                    pathOptions={{ color: getColor(area.level), fillColor: getColor(area.level), fillOpacity: 0.5 }}>
                                    <Popup>
                                        <div className='text-sm'>
                                            <strong>{area.name}</strong>
                                            <p>
                                                Ocorrências: {area.crimes}
                                            </p>
                                            <p>
                                                Risco: {area.level}
                                            </p>
                                        </div>
                                    </Popup>
                                </CircleMarker>
                            ))}
                        </MapContainer>
                    </div>

                    <div className='mt-6 flex flex-wrap gap-6 text-sm text-[#BBC9CF]'>
                        <div className='flex items-center gap-2'>
                            <div className='h-3 w-3 rounded-full bg-[#22C55E]' />
                            Baixo risco
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='h-3 w-3 rounded-full bg-[#FACC15]' />
                            Médio risco
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='h-3 w-3 rounded-full bg-[#FF4D4D]' />
                            Alto risco
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <Footer />
        </>
        )
}