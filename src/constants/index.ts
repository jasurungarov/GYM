import { Label } from '@radix-ui/react-dropdown-menu'
import exp from 'constants'
import {
    DiApple ,
    DiGithub ,
    DiModernizr ,
    DiNpm ,
    DiProlog ,
    DiVisualstudio ,
    DiWordpress,
} from 'react-icons/di'

export const featuredItems = [
    DiNpm ,
    DiApple ,
    DiGithub ,
    DiModernizr ,
    DiProlog ,
    DiVisualstudio ,
    DiWordpress,
]

export const programs = [
    {
        title: 'Workout Videos',
        descr: 'Access to hundreds of free, full-length workout videos.'
    },
    {
        title: 'Workout Programs',
        descr: 'Affourd and effective workout programs.'
    },
    {
        title: 'Meal Plans',
        descr: 'Plans built with registered dieitieds and nutritionists.'
    }
]

export const navLinks = [
    { label: 'Home', path: '/'},
    { label: 'Programs', path: '#programs'},
]