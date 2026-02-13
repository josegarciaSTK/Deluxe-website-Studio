
import React from 'react';
import { Hammer, Home, Paintbrush, Briefcase, Ruler, TrendingUp } from 'lucide-react';
import { Service, Project, FAQ, Stat } from './types';

export const SERVICES: Service[] = [
  {
    id: 'rehabs',
    title: 'Residential & Commercial Rehabs',
    description: 'From 150-room renovations to 45,000-square-foot hospitality projects, we handle large-scale structural and aesthetic rehabilitations with precision.',
    icon: 'Hammer',
    image: 'https://picsum.photos/seed/rehab/800/1000'
  },
  {
    id: 'new-construction',
    title: 'New Construction',
    description: 'We specialize in ground-up builds, including custom homes and "Luxury Class A" multi-family communities featuring high-end clubhouses.',
    icon: 'Home',
    image: 'https://picsum.photos/seed/newcon/800/1000'
  },
  {
    id: 'pre-listing',
    title: 'Pre-Listing Renovation',
    description: 'We maximize property value before a sale by updating kitchens, bathrooms, and interiors to create a unique design that appeals to modern buyers.',
    icon: 'TrendingUp',
    image: 'https://picsum.photos/seed/listing/800/1000'
  },
  {
    id: 'fix-flip',
    title: 'Fix & Flip',
    description: 'Having mastered the flip market since 2016, we partner with investors to turn distressed properties into high-end residences.',
    icon: 'Paintbrush',
    image: 'https://picsum.photos/seed/flip/800/1000'
  },
  {
    id: 'design',
    title: 'Design Services',
    description: 'We offer turnkey interior design services to bring your vision to life, ensuring every detail reflects luxury and functionality.',
    icon: 'Ruler',
    image: 'https://picsum.photos/seed/design/800/1000'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern kitchen refit',
    category: 'Kitchen',
    duration: '4 weeks',
    description: 'This kitchen transformation brought sleek, modern design and enhanced functionality to our client’s home. We installed custom cabinetry and high-quality worktops.',
    testimonial: 'Refit completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding!',
    client: 'Rachel Morgan',
    image: 'https://picsum.photos/seed/k1/1200/800',
    clientImage: 'https://picsum.photos/seed/c1/100/100'
  },
  {
    id: '2',
    title: 'External garden path build',
    category: 'External Works',
    duration: '1 month',
    description: 'Our team designed and built a durable, visually appealing garden path to enhance the outdoor space using premium materials.',
    testimonial: 'The team at Refit did an amazing job on our garden path. It’s sturdy, looks fantastic, and transformed our outdoor space.',
    client: 'Michael Turner',
    image: 'https://picsum.photos/seed/g1/1200/800',
    clientImage: 'https://picsum.photos/seed/c2/100/100'
  },
  {
    id: '3',
    title: 'Bathroom renovation',
    category: 'Bathroom',
    duration: '6 weeks',
    description: 'We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling and sleek fixtures.',
    testimonial: 'Refit turned our outdated bathroom into a stunning modern space. The quality of work was excellent!',
    client: 'Laura Davies',
    image: 'https://picsum.photos/seed/b1/1200/800',
    clientImage: 'https://picsum.photos/seed/c3/100/100'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'What area are you based in?',
    answer: 'We primarily serve Orlando and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on the scope. A kitchen renovation can take a few weeks, while larger projects like extensions may take several months.'
  },
  {
    question: 'Do you offer free quotes?',
    answer: 'Yes! We offer free, no-obligation quotes. After an initial consultation, we’ll assess your project needs and provide a detailed estimate.'
  }
];

export const STATS: Stat[] = [
  { label: 'Years experience', value: '15+', description: 'Improving homes with expert craftsmanship for years' },
  { label: 'Projects completed', value: '250+', description: 'Successful projects delivered with quality and care' },
  { label: 'Skilled Tradespeople', value: '30+', description: 'Our team of 30 experts ensures top-quality results' },
  { label: 'Client satisfaction', value: '100%', description: 'All of our clients are satisfied with our work and service' }
];
