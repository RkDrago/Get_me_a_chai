import React from 'react'
import Head from 'next/head';

const About = () => {
    return (
        <div className='pt-10'>
            <Head>
                <title>About Buy Me a Chai</title>
                <meta name="description" content="Learn more about Buy Me a Chai - a platform where you can support your favorite content creators by donating money." />
            </Head>

            <div className="max-w-4xl mx-auto px-4 py-8 text-center flex flex-col gap-20">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold mb-4">About Buy Me a Chai</h1>
                    <p className="text-lg mb-4">Welcome to Buy Me a Chai! We&apos;re passionate about empowering content creators to pursue their passions and dreams.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-bold mb-2 hover:underline">Our Mission</h2>
                    <p className="mb-4">Our mission is to provide a simple and meaningful way for supporters to express appreciation for the content they love. Whether it&apos;s a cup of Chai or a small token of gratitude, every contribution goes a long way in helping creators continue doing what they love.</p>

                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-bold mb-2 hover:underline">How It Works</h2>
                    <p className="mb-4">Buy Me a Chai makes it easy for supporters to show their love and support for their favorite creators. Simply visit the creator&apos;s profile, choose the amount you&apos;d like to donate, and leave a message to brighten their day. It&apos;s a simple gesture that can make a big difference!</p>

                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-bold mb-2 hover:underline">Connect With Us</h2>
                    <p className="mb-4">We love hearing from our community! Follow us on social media to stay updated on the latest news, features, and success stories. Have a question or suggestion? We&apos;re here to help — feel free to reach out to us anytime!</p>

                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-bold mb-2 hover:underline">Get Started</h2>
                    <p className="mb-4">Ready to support your favorite creators on Buy Me a Chai? Explore our community of talented individuals and show your appreciation today. Together, we can help creators thrive and continue sharing their passions with the world!</p>
                </div>
            </div>
        </div>
    );
};

export default About


export const metadata = {
    title: "About - Get ME A Chai",
  }