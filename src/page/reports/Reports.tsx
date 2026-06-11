import Header from '../../compenent/header/Header';
import Footer from '../../compenent/footer/Footer';
import { reports } from './reportsData';
import { Search, Filter, AlertTriangle, Radio, ShieldAlert, CircleCheck } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useMemo, useState } from 'react';

const InfoCard = ({ title, value }: { title: string; value: string | number }) => (
  <div className='rounded-3xl bg-[#07111F] p-5'>
    <p className='text-sm text-[#8EA1B5]'>{title}</p>
    <p className='mt-2 text-lg font-semibold text-white'>{value}</p>
  </div>
);

export default function Reports() {

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [selectedReport, setSelectedReport] = useState<(typeof reports)[number] | null>(null);

  const filteredReports = useMemo(() => {

    return reports.filter((item) => {

      const searchMatch =
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.district.toLowerCase().includes(search.toLowerCase());

      const typeMatch =
        !typeFilter || item.type === typeFilter;

      const priorityMatch =
        !priorityFilter || item.priority === priorityFilter;

      return searchMatch && typeMatch && priorityMatch;
    });

  }, [search, typeFilter, priorityFilter]);

  const pieData = [
    { name: 'Roubo', value: 35 },
    { name: 'Furto', value: 25 },
    { name: 'Violência', value: 20 },
    { name: 'Arma de fogo', value: 20 }
  ];

  const COLORS = [
    '#3B82F6',
    '#22C55E',
    '#EF4444',
    '#FACC15'
  ];

  const stats = [
      {
          title: 'Ocorrências Críticas',
          value: '03',
          color: 'text-red-400',
          icon: AlertTriangle
      },
      {
          title: 'Denúncias Recebidas',
          value: '16',
          color: 'text-cyan-400',
          icon: Radio
      },
      {
          title: 'Em Andamento',
          value: '09',
          color: 'text-amber-400',
          icon: ShieldAlert
      },
      {
          title: 'Concluídas',
          value: '02',
          color: 'text-green-400',
          icon: CircleCheck
      }
  ];

  return (
    <>
      <Header />

      <main className='h-full bg-[#03101e] py-10'>
        <section className='mx-auto max-w-7xl px-6'>
          <div className='mb-10'>
            <h1 className='mt-3 text-5xl font-black text-white'> Relatórios </h1>
            <p className='mt-4 text-[#90A4B7]'>
              Consulta, monitoramento e gerenciamento de ocorrências.
            </p>
          </div>

          {/* KPIS */}
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

          {/* FILTROS */}
          <div className='mt-10 rounded-3xl border border-white/10 bg-[#020d1d] p-6 backdrop-blur-xl'>
            <div className='mb-5 flex items-center gap-2'>
              <Filter size={18} className='text-cyan-400' />
              <h2 className='font-semibold text-white'> Filtros </h2>
            </div>

            <div className='grid gap-4 md:grid-cols-4'>
              <div className='relative'>
                <Search size={18} className='absolute top-1/2 left-4 -translate-y-1/2 text-cyan-400' />
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Pesquisar...' className='w-full rounded-xl bg-[#0D1623] py-3 pr-4 pl-11 text-white'/>
              </div>

              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className='rounded-xl bg-[#0D1623] p-3 text-white' >
                <option value=''>Todos os tipos</option>
                <option>Roubo</option>
                <option>Furto</option>
                <option>Violência</option>
                <option>Arma de fogo</option>
              </select>

              <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className='rounded-xl bg-[#0D1623] p-3 text-white' >
                <option value=''>Todas prioridades</option>
                <option>Baixa</option>
                <option>Média</option>
                <option>Alta</option>
                <option>Crítica</option>
              </select>
            </div>
          </div>

          {/* TABELA */}
          <div className='mt-8 mb-10 overflow-x-auto rounded-3xl border border-white/10 bg-[#020d1d] backdrop-blur-xl'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-white/10'>
                  <th className='p-5 text-left text-[#90A4B7]'>ID</th>
                  <th className='p-5 text-left text-[#90A4B7]'>Tipo</th>
                  <th className='p-5 text-left text-[#90A4B7]'>Prioridade</th>
                  <th className='p-5 text-left text-[#90A4B7]'>Bairro</th>
                  <th className='p-5 text-left text-[#90A4B7]'>Status</th>
                  <th className='p-5 text-left text-[#90A4B7]'>Ações</th>
                </tr>
              </thead>

              <tbody>
                {filteredReports.map((item) => (
                  <tr key={item.id} className='border-b border-white/5 hover:bg-white/5' >
                    <td className='p-5 text-white'>
                      #{item.id}
                    </td>

                    <td className='p-5 text-white'>
                      {item.type}
                    </td>

                    <td className='p-5'>
                      <span className='rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-400'>
                        {item.priority}
                      </span>
                    </td>

                    <td className='p-5 text-white'>
                      {item.district}
                    </td>

                    <td className='p-5 text-[#90A4B7]'>
                      {item.status}
                    </td>

                    <td className='p-5'>
                      <button onClick={() => setSelectedReport(reports.find((r) => r.id === item.id) || null)} className='rounded-xl bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-400 transition hover:bg-cyan-500/20'>
                        Ver
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedReport && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-3 sm:p-4'>
            
            <div className='relative w-full max-w-[95vw] sm:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0D1623] shadow-2xl'>

              <div className='absolute top-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]' />

              <div className='relative p-4 sm:p-6 lg:p-8'>
                  {/* Header */}
                  <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                    <div>
                      <p className='text-sm tracking-[0.2em] text-cyan-400'> OCORRÊNCIA </p>
                      <h2 className='mt-2 text-2xl sm:text-3xl font-bold text-white'> #{selectedReport.id} </h2>
                    </div>

                    <button onClick={() => setSelectedReport(null)} className='flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10'>
                      ✕
                    </button>
                  </div>

                  {/* Dados */}
                  <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
                    <InfoCard title='Tipo' value={selectedReport.type} />
                    <InfoCard title='Prioridade' value={selectedReport.priority} />
                    <InfoCard title='Bairro' value={selectedReport.district} />
                    <InfoCard title='Data' value={selectedReport.date} />
                    <InfoCard title='Horário' value={selectedReport.hour} />
                    <InfoCard title='Status' value={selectedReport.status} />
                  </div>

                  {/* Descrição */}
                  <div className='mt-8 rounded-3xl bg-[#07111F] p-6'>
                    <h3 className='mb-4 text-lg font-semibold text-white'> Descrição da Ocorrência </h3>
                    <p className='leading-7 text-[#AAB7C4]'>
                      {selectedReport.description}
                    </p>
                  </div>

                  {/* Evidências */}
                  <div className='mt-8'>
                    <h3 className='mb-4 text-lg font-semibold text-white'> Evidências </h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                      {selectedReport.images?.map((img, index) => (
                        <img key={index} src={img}  alt='' className='h-40 sm:h-32 w-full rounded-2xl object-cover' />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CHART */}
          <div className='rounded-[28px] border border-white/10 bg-[#020d1d] backdrop-blur-xl p-7'>
            <div className='mb-6'>
              <p className='text-sm text-cyan-400'> DISTRIBUIÇÃO </p>
              <h2 className='mt-1 text-2xl font-bold text-white'> Tipos de Crimes </h2>
            </div>
          
            <div className='h-96'>
              <ResponsiveContainer>
                <PieChart>
                <Pie data={pieData} dataKey='value' innerRadius={70} outerRadius={120} paddingAngle={5}>
                  {pieData.map((_, index) => (
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
              {pieData.map((item, index) => (
                <div key={item.name} className='flex items-center gap-3'>
                   <div className='h-3 w-3 rounded-full' style={{backgroundColor: COLORS[index] }} />
                      <span className='text-sm text-[#8EA1B5]'>
                        {item.name}
                      </span>
                </div>
                  ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}