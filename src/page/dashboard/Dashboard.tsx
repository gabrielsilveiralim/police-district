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

    const stats = [
    {
        title: 'Ocorrências Críticas',
        value: '03',
        color: 'text-red-400',
        icon: TriangleAlert
    },
    {
        title: 'Denúncias Recebidas',
        value: '16',
        color: 'text-cyan-400',
        icon: Radio
    },
    {
        title: 'Viaturas Disponíveis',
        value: '09',
        color: 'text-emerald-400',
        icon: CarFront
    },
    {
        title: 'Áreas Sob Atenção',
        value: '02',
        color: 'text-amber-400',
        icon: CircleAlert
    }
];

    return (
        <>
            <Header />
            <main className='h-full w-full bg-[#03101e] py-8'>
                <section className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32'> 
                    <div className="mb-8 p-4">
                        <h1 className="mt-4 text-5xl font-black text-white"> Painel Operacional </h1>
                        <p className="mt-4 max-w-3xl text-[#9AA8B7]">
                            Monitoramento em tempo real das ocorrências,
                            viaturas e áreas críticas da cidade.
                        </p>
                    </div>

                    <div className='grid gap-5 grid-cols-2 p-6'>
                        {stats.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className='group relative overflow-hidden rounded-3xl bg-[#020d1d] backdrop-blur-xl border border-white/10 '>
                                    <div className='absolute inset-0 bg-transparent' />
                                    <div className='relative rounded-3xl p-6'>
                                        <div className='mb-6 flex items-center justify-between'>
                                            <span className='text-sm text-[#8EA1B5]'> {item.title} </span>
                                            <div className='flex h-8 w-8 items-center justify-center rounded-2xl bg-[#07111F]'>
                                                <Icon size={20} className={item.color} />
                                            </div>
                                        </div>
                                        <h2 className={`text-5xl font-medium ${item.color}`}> {item.value} </h2>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className='mt-10 grid gap-6 xl:grid-cols-[1.5fr_1fr]'>
                        <div className='rounded-[28px] border border-white/10 bg-[#0D1623]/90 backdrop-blur-xl p-7'>
                            <div className='mb-6 flex items-center justify-between'>
                                <div>
                                    <h2 className='mt-1 text-2xl font-bold text-white'> Crimes Semanais </h2>
                                </div>
                                <span className='rounded-full bg-cyan-500/10 px-4 py-2 text-xs text-cyan-400'> Últimos 7 dias </span>
                            </div>
                            <div className='h-96'>
                                <ResponsiveContainer>
                                    <LineChart data={evo}>
                                        <CartesianGrid stroke='#1A2736' vertical={false}/>
                                        <XAxis dataKey='day' tick={{ fill: '#8EA1B5' }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fill: '#8EA1B5' }} axisLine={false} tickLine={false} />
                                        <Tooltip
                                            contentStyle={{
                                               
                                                border: '1px solid #1F2D3D',
                                                borderRadius: '16px',
                                                color: '#fff'
                                            }}/>
                                        <Line type='monotone' dataKey='crimes' stroke='#22D3EE' strokeWidth={4} dot={{ r: 5, fill: '#22D3EE' }} activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className='rounded-[28px] border border-white/10 bg-[#0D1623] backdrop-blur-xl p-7'>
                            <div className='mb-6'>
                                <p className='text-sm text-cyan-400'> DISTRIBUIÇÃO </p>
                                <h2 className='mt-1 text-2xl font-bold text-white'> Tipos de Crimes </h2>
                            </div>

                            <div className='h-96'>
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Pie data={pizza} dataKey='value' innerRadius={70} outerRadius={120} paddingAngle={5}>
                                            {pizza.map((_, index) => (
                                                <Cell key={index} fill={COLORS[index]}  />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                background: '#0D1623',
                                                border: '1px solid #1F2D3D',
                                                borderRadius: '16px'
                                            }}/>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className='mt-4 grid grid-cols-2 gap-3'>
                                {pizza.map((item, index) => (
                                    <div key={item.name} className='flex items-center gap-3'>
                                        <div className='h-3 w-3 rounded-full'
                                            style={{backgroundColor: COLORS[index] }} />
                                        <span className='text-sm text-[#8EA1B5]'>
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>                    
                </section>
            </main>
            <Footer />
        </>
    );
}