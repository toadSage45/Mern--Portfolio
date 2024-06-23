import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { projects } from '../../resources/projects';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    return (
        <div className='my-10'>
            <SectionTitle title="Projects" />

            <div className='flex py-10 gap-20 flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#ffff] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div
                            key={project._id}
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}
                            className='p-5 nss cursor-pointer'
                        >
                            <h1
                                className={`${
                                    selectedItemIndex === index
                                        ? 'text-primary border-2 border-tertiary rounded-lg bg-[#ffffffa5]'
                                        : 'text-lastly'
                                }`}
                            >
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-5'>
                    <img src={projects[selectedItemIndex].image} alt={projects[selectedItemIndex].title} className='w-full h-48 object-cover rounded-lg mb-5' />
                    <h1 className='nss text-tertiary text-2xl'>{projects[selectedItemIndex].title}</h1>
                    <h1 className='nss text-fourthly'>{projects[selectedItemIndex].description}</h1>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        {projects[selectedItemIndex].technologies.map((tech, index) => (
                            <span key={index} className='bg-gray-200 text-gray-800 px-2 py-1 rounded'>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <a href={projects[selectedItemIndex].link} className='text-blue-500 mt-3' target='_blank' rel='noopener noreferrer'>
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
