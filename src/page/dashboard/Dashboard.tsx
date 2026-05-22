import Footer from '../../compenent/footer/Footer';
import Header from '../../compenent/header/Header';
import { Radio, CarFront, TriangleAlert, CircleAlert } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {

    const evo = [
        {
            day: 'Seg',
            crimes: 6
        },
        {
            day: 'Ter',
            crimes: 2
        },
        {
            day: 'Qua',
            crimes: 4
        },
        {
            day: 'Qui',
            crimes: 1
        },
        {
            day: 'Sex',
            crimes: 5
        },
        {
            day: 'Sáb',
            crimes: 13
        },
        {
            day: 'Dom',
            crimes: 11
        }
    ];

    const pizza = [
        {
            name: 'Roubo',
            value: 35
        },
        {
            name: 'Furto',
            value: 25
        },
        {
            name: 'Violência',
            value: 20
        },
        {
            name: 'Arma de fogo',
            value: 20
        }
    ];

    const COLORS = [
        '#00BFFF',
        '#22C55E',
        '#FF4D4D',
        '#FACC15'
    ];

    return (
        <>
            <Header />
            <main className='h-full w-full bg-[#03101e] py-8'>
                <section className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32'> 
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className='h-32 rounded-2xl border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-5 shadow-2xl backdrop-blur-md'>
                            <div className='mb-3 flex items-center justify-between'>
                                <p className='text-sm tracking-wide text-[#BBC9CF]'> Ocorrências Críticas </p>
                                <TriangleAlert size={22} className='text-[#FF4D4D]'/>
                            </div>
                            <span className='text-3xl font-bold text-[#FF4D4D]'> 3 </span>
                        </div>

                        <div className='h-32 rounded-2xl border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-5 shadow-2xl backdrop-blur-md/30'>
                            <div className='mb-3 flex items-center justify-between'>
                                <p className='text-sm tracking-wide text-[#BBC9CF]'> Denúncias Recebidas </p>
                                <Radio size={22} className='text-[#A4E6FF]'/>
                            </div>
                            <span className='text-3xl font-bold text-[#A4E6FF]'> 16 </span>
                        </div>

                        <div className='h-32 rounded-2xl border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-5 shadow-2xl backdrop-blur-md'>
                            <div className='mb-3 flex items-center justify-between'>
                                <p className='text-sm tracking-wide text-[#BBC9CF]'> Viaturas Disponíveis </p>
                                <CarFront size={22} className='text-[#22C55E]'/>
                            </div>
                            <span className='text-3xl font-bold text-[#22C55E]'> 9 </span>
                        </div>
                        <div className='h-32 rounded-2xl border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-5 shadow-2xl backdrop-blur-md'>
                            <div className='mb-3 flex items-center justify-between'>
                                <p className='text-sm tracking-wide text-[#BBC9CF]'> Áreas Sob Atenção </p>
                                <CircleAlert size={22} className='text-[#FACC15]'/>
                            </div>
                            <span className='text-3xl font-bold text-[#FACC15]'> 2 </span>
                        </div>
                    </div>

                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='rounded-2xl p-6 border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] shadow-2xl'>
                            <div className='mb-5'>
                                <h2 className='text-xl font-bold text-[#BBC9CF]'>Crimes Semanais</h2>
                            </div>
                            <div className='h-64 lg:h-80'>
                                <ResponsiveContainer width='100%' height='100%'>
                                    <LineChart data={evo}>
                                        <CartesianGrid strokeDasharray='3 3' />
                                        <XAxis dataKey='day' />
                                        <YAxis />
                                        <Tooltip />
                                        <Line
                                            type='monotone'
                                            dataKey='crimes'
                                            stroke='#A4E6FF'
                                            strokeWidth={3} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className='rounded-2xl border border-white/10 bg-linear-to-r from-[#07111F] via-[#0B1729] to-[#102038] p-5 shadow-2xl'>
                            <div className='mb-5 flex items-center justify-between'>
                                <h2 className='text-xl font-bold text-[#BBC9CF]'>Tipos de Crimes</h2>
                                <span className='text-xs tracking-wide text-[#BBC9CF]'>RELATÓRIO</span>
                            </div>
                            <div className='h-64 lg:h-80'>
                                <ResponsiveContainer width='100%' height='100%'>
                                    <PieChart>
                                        <Pie
                                            data={pizza}
                                            dataKey='value'
                                            cx='50%'
                                            cy='50%'
                                            outerRadius={110} >
                                            {pizza.map((_, index) => (
                                                <Cell key={index} fill={COLORS[index]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>                    
                </section>
            </main>
            <Footer />
        </>
    );
}