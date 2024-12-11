import Head from 'next/head';
import Layout from "@/components/layout/Layout"


const Careers = () => {

    let Nothome = true;

    const jobs = [
        {
            title: 'Frontend Developer',
            location: 'Remote',
            type: 'Full-time',
            description: 'Build stunning UI experiences with React and Next.js.',
            requirements: ['React.js', 'HTML5', 'CSS', 'Bootstrap', 'Javascipt']
        },
        {
            title: 'Backend Engineer',
            location: 'New York, USA',
            type: 'Full-time',
            description: 'Develop scalable APIs and optimize server-side logic.',
            requirements: ['React.js', 'HTML5', 'CSS', 'Bootstrap', 'Javascipt']

        },
        {
            title: 'UI/UX Designer',
            location: 'London, UK',
            type: 'Full-time',
            description: 'Design intuitive and user-centric interfaces.',
            requirements: ['React.js', 'HTML5', 'CSS', 'Bootstrap', 'Javascipt']

        },
    ];

    return (
        <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>


            <main className="bg-gray-50">
                {/* Hero Section */}
                <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/banner/career_banner.jpg')" }}>
                    {/* <img src='/assets/img/banner/career_banner.webp' alt='' className='w-full'/> */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">

                        <div>
                            <h1 className="text-4xl font-bold mb-4 text-white">Join Our Team</h1>
                            <p className="text-lg text-white">Shape the future with us. Explore exciting career opportunities and grow with our innovative team.</p>
                        </div>
                    </div>
                </section>

                {/* Why Join Us */}
                <section className="py-16 px-8">
                    <h2 className="text-3xl font-bold text-center mb-10">Why Work With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <img src="/assets/img/icon/team.jpg" alt="Teamwork" className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                            <p>Work with talented individuals in a supportive and inclusive environment.</p>
                        </div>
                        <div className="text-center">
                            <img src="/assets/img/icon/office.jpg" alt="Office" className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Cutting-Edge Projects</h3>
                            <p>Be part of projects that redefine innovation and technology.</p>
                        </div>
                        <div className="text-center">
                            <img src="/assets/img/icon/growth.webp" alt="Growth" className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                            <p>Opportunities to advance your career and learn new skills.</p>
                        </div>
                    </div>
                </section>

                {/* Job Listings */}
                <section className="py-16 px-8 bg-white">
                    <h2 className="text-3xl font-bold text-center mb-10">Open Positions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job, index) => (
                            <div key={index} className="relative p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
                                {/* Top Streak */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-lg"></div>

                                {/* Job Details */}
                                <div className="mt-4">
                                    <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                                    <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
                                    <p className="text-gray-600 mb-4"><strong>Type:</strong> {job.type}</p>
                                    <p className="text-gray-700 mb-4">{job.description}</p>
                                </div>

                                {/* Pre-Requisites */}
                                {job.requirements && (
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Pre-Requisites</h3>
                                            {job.requirements.map((req, reqIndex) => (
                                                <p className='mb-1' key={reqIndex}>{req}</p>
                                            ))}
                                      
                                    </div>
                                )}

                                {/* Apply Button */}
                                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-blue-600 text-white text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Ready to Join Us?</h2>
                    <p className="mb-6 text-white">We’re excited to work with individuals who are passionate, driven, and ready to make a difference. Apply today!</p>
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Explore More Jobs</button>
                </section>
            </main>
        </Layout>
    );
};

export default Careers;
