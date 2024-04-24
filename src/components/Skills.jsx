import React from 'react';

import Aws from '../assets/aws.png';
import Azure from '../assets/azure.png';
import CSS from '../assets/css.png';
import Docker from '../assets/docker.png';
import HTML from '../assets/html.png';
import Java from '../assets/java.png';
import JavaScript from '../assets/javascript.png';
import Kubernetes from '../assets/kubernetes.png';
import Mongo from '../assets/mongo.png';
import Mysql from '../assets/mysql.png';
import Node from '../assets/node.png';
import Oracle from '../assets/oracle.png';
import Postgre from '../assets/postgre.png';
import ReactImg from '../assets/react.png';
import Sqlserver from '../assets/sqlserver.png';
import Tailwind from '../assets/tailwind.png';
import Vue from '../assets/vue.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>


                {/* Front-End skills */}
                <div>
                    <p className='text-2xl font-bold inline border-b-2 border-pink-600 '>Front-End</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Vue} alt="Vue icon" />
                        <p className='my-4'>VUE</p>
                    </div>
                </div>

                {/* Back-End skills */}
                <div>
                    <p className='text-2xl font-bold inline border-b-2 border-pink-600 '>Back-End</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                        <p className='my-4'>JAVA</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                </div>

                {/* Databases skills */}
                <div>
                    <p className='text-2xl font-bold inline border-b-2 border-pink-600 '>Databases</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mysql} alt="MySQL icon" />
                        <p className='my-4'>MYSQL</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Oracle} alt="Oracle icon" />
                        <p className='my-4'>ORACLE</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Sqlserver} alt="SQLServer icon" />
                        <p className='my-4'>SQL SERVER</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Postgre} alt="Postgre icon" />
                        <p className='my-4'>POSTGRE</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                </div>

                {/* Cloud skills */}
                <div>
                    <p className='text-2xl font-bold inline border-b-2 border-pink-600 '>Cloud</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Aws} alt="Aws icon" />
                        <p className='my-4'>AWS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Azure} alt="Azure icon" />
                        <p className='my-4'>AZURE</p>
                    </div>
                </div>

                {/* DevOps skills */}
                <div>
                    <p className='text-2xl font-bold inline border-b-2 border-pink-600 '>DevOps</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Docker} alt="Docker icon" />
                        <p className='my-4'>DOCKER</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Kubernetes} alt="Kubernetes icon" />
                        <p className='my-4'>KUBERNETES</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
