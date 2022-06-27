import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Leasson(props: LessonProps){

    const isLessonAvaiable = isPast(props.availableAt);
    const avaiableDateFormatted = format(props.availableAt, "d' 'MMMM' • 'k'h'mm")

    const { slug } = useParams<{slug: string;}>()

    const isActiveLesson = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {avaiableDateFormatted}
            </span>

            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}>
                <header className="flex items-center justify-between">
                    
                    {isLessonAvaiable ? (
                        <span className={`text-sm ${!isActiveLesson ? 'text-blue-500' : 'text-white'} font-medium flex items-center gap-2`}>
                        <CheckCircle size={20}/>
                        Conteúdo liberado
                    </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20}/>
                        Em breve
                    </span>
                    )}

                    <span className="text-xs rounded px-2 py[2px] text-white border border-green-300 font-bold">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={`${isActiveLesson? 'text-white' : 'text-gray-200'} mt-5 block`}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}