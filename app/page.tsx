import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ActivitySquare, Building2, Factory, FileCog, FileStack, Landmark, Lightbulb, MapPin, MonitorDot, Ratio, ThumbsUp, Map } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const companies = ['Limited Liability Company (LLC)', 'Free Zone Companies', 'UAE Joint Stock Company', 'Trade Representative Office', 'Dual License Branch Office', 'Extension Branch Office']
const benefits = ["Tax Advantages", "Foreign Ownership", "World-Class Infrastructure", "Efficient Regulations", "Global Trade and Connectivity", "Strong Legal Framework", "Strategic Free Zones", "Residency Options", "Diverse Business Opportunities"]
const whyABC = ["Transparent Processes", "Expert Guidance", "Low operations", "Tax benefits", "No foreign exchange control", "Time and Cost Efficiency", "Customer-Centric Approach","Clear Communication", "Focus on Results"]
export default function Home() {
  return (
    <>
      <main>
        <section className="min-h-screen md:h-fit relative bg-[url('/assets/images/bubai-background.jpg')] bg-cover flex flex-col md:flex-row items-center justify-center sm:gap-40 gap-10 pt-[50%] sm:pt-[30%] md:pt-0 pb-10 md:pb-0 md:mt-10">
          <div className='bg-black bg-opacity-70 absolute top-0 left-0 h-full w-full z-0'></div>
          <div className='sm:w-7/12 md:w-[42%] sm:mt-10 w-3/4 relative z-10 md:relative'>
            <div className='py-5 border-y-4 max-w-fit'>
              <h1 className='text-white text-2xl sm:text-5xl md:text-5xl font-bold text-center sm:text-start'>Crafting Your Business Success Story in the UAE?</h1>
            </div>
            <p className='text-white text-base sm:text-xl md:text-2xl mt-5 text-center sm:text-start'>Fueling Your Business Growth with AB CAPITAL SERVICES Unlock opportunities, navigate challenges, and thrive with our strategic financial solutions.</p>
            <div className='mt-10 flex items-center justify-center md:justify-start'>
              <Link href={'#form'}>
                <Button type="submit" className=' bg-[#036B6D] hover:bg-[#9B999A] hover:text-gray-800 w-40'>
                  Cost Calculator
                </Button>
              </Link>
            </div>
          </div>
          <div className='relative z-10 sm:mt-10 md:bg-white rounded-md px-[5%] sm:px-[10%] md:px-0 md:w-1/4'>
            <ContactForm />
          </div>
        </section>
        {/* section two  */}
        <section className='w-[90%] sm:w-[80%] mx-auto my-20 flex flex-col gap-4'>
          <h2 className='text-[#036B6D] uppercase font-semibold sm:text-3xl text-xl text-center'>Company Formation in the UAE</h2>
          <p className='text-gray-700 text-center text-sm sm:text-base'>{`Are you looking to establish your business in the dynamic and thriving business landscape of the United Arab Emirates? At AB CAPITAL SERVICES, we specialize in assisting entrepreneurs and investors like you in setting up your company with ease. In this guide, we'll explore three key options for company formation: Mainland and Freezone businesses, highlighting their differences and the unique benefits they offer.`}</p>
          <div className='w-full flex justify-evenly flex-wrap mt-6 gap-4'>
            <Card className='w-72'>
              <CardHeader className='items-center'>
                <Landmark className='text-[#036B6D] sm:w-14 sm:h-14 w-10 h-10' />
                <h3 className='text-gray-900 text-center font-semibold'>Mainland Company Formation</h3>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 text-sm text-center'>{
                  `Mainland company formation in the UAE refers to establishing your business within the jurisdiction governed by the respective Emirates' Department of Economic Development (DED). These companies are also known as onshore companies.`
                }</p>
              </CardContent>
            </Card>
            <Card className='w-72'>
              <CardHeader className='items-center'>
                <Ratio className='text-[#036B6D] sm:w-14 sm:h-14 w-10 h-10' />
                <h3 className='text-gray-900 text-center font-semibold'>Free Zone Company Formation</h3>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 text-sm text-center'>
                  Freezone company formation, on the other hand, involves setting up your business within designated free trade zones across the UAE. Each free zone is designed to cater to specific industries and business types.
                </p>
              </CardContent>
            </Card>
            <Card className='w-72'>
              <CardHeader className='items-center'>
                <MonitorDot className='text-[#036B6D] sm:w-14 sm:h-14 w-10 h-10' />
                <h3 className='text-gray-900 text-center font-semibold'>Off Shore Company Formation</h3>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 text-sm text-center'>
                  {"offshore company formation in the UAE is easy and strategic, ensuring a smooth setup for international business expansion.. AB Capital, with its expertise and support, facilitates the seamless creation of offshore companies in the UAE."}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* section three  */}
        <section className=' bg-gray-100 my-20 py-10'>
          <div className='w-[90%] sm:w-[80%] mx-auto  flex flex-col gap-4'>
            <h2 className='text-[#036B6D] uppercase font-semibold sm:text-3xl text-xl text-center'>Business structured - Opening Company in Dubai</h2>
            <p className='text-gray-700 text-center sm:text-base text-sm'>Dubai Business Setup: Choose the Right Structure, Optimize Ownership, and Navigate Regulations with Expert Guidance for Success.</p>
            <div className='w-full grid grid-cols-3 gap-4'>
              {companies.map((item, index) =>
                <Card key={index} className='col-span-3 sm:col-span-1'>
                  <CardHeader className='items-center'>
                    <MapPin className='sm:w-12 sm:h-12 w-10 h-10 text-[#036B6D]' />
                    <h3 className='font-bold text-gray-900 sm:text-lg text-center'>{item}</h3>
                  </CardHeader>
                </Card>)}

            </div>
          </div>
        </section>
        {/* section four  */}
        <section className='my-20'>
          <div className='w-[90%] sm:w-[80%] mx-auto  flex flex-col gap-5'>
            <h2 className='text-[#036B6D] uppercase font-semibold sm:text-3xl text-xl text-center'>BUSINESS LICENSES FOR COMPANY FORMATION</h2>
            <p className='text-gray-700 text-center text-sm sm:text-base'>company formation, obtaining the necessary business licenses is a crucial step to ensure legal compliance. </p>
            <div className='w-full grid grid-cols-3 sm:gap-4 gap-8'>
              <div className='col-span-3 sm:col-span-1 flex flex-col gap-4 sm:gap-2 border-r-4 pr-3 border-[#036B6D] items-center'>
                <FileCog className='text-[#036B6D] sm:w-16 sm:h-16 w-10 h-10' />
                <h3 className='text-gray-900 font-semibold sm:text-xl text-lg text-center'>Professional License</h3>
                <p className='text-gray-700 text-sm text-center'>
                  This license authorizes professionals to operate within their specialized fields. Typically renewed annually, the Professional License is a key requirement for ensuring legal compliance and conducting business activities in the United Arab Emirates.
                </p>
              </div>
              <div className='col-span-3 sm:col-span-1 flex flex-col gap-4 sm:gap-2 border-r-4 pr-3 border-[#036B6D] items-center'>
                <Building2 className='text-[#036B6D] sm:w-16 sm:h-16 w-10 h-10' />
                <h3 className='text-gray-900 font-semibold sm:text-xl text-lg text-center'>Commercial License</h3>
                <p className='text-gray-700 text-sm text-center'>
                  The Commercial License offered by ABCapital.ae is a vital authorization for businesses engaged in trading activities. Tailored to meet the specific needs of our clients, this license allows for the legal operation of commercial ventures, ensuring compliance with regulations set by the Department of Economic Development (DED) for mainland businesses or the respective Free Zone Authority for Free Zone companies.
                </p>
              </div>
              <div className='col-span-3 sm:col-span-1 flex flex-col gap-4 sm:gap-2 border-r-4 pr-3 border-[#036B6D] items-center'>
                <Factory className='text-[#036B6D] sm:w-16 sm:h-16 w-10 h-10' />
                <h3 className='text-gray-900 font-semibold sm:text-xl text-lg text-center'>Industrial License</h3>
                <p className='text-gray-700 text-sm text-center'>
                  The Industrial License from AbCapital.ae is your gateway to conducting manufacturing and industrial activities in the UAE. This license ensures regulatory compliance set by DED for mainland operations or the respective Free Zone Authority for Free Zone entities.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section five  */}
        <section className=' bg-gray-100 my-20 py-10'>
          <div className='w-[90%] sm:w-[80%] mx-auto  flex flex-col gap-4'>
            <h2 className='text-[#036B6D] uppercase font-semibold sm:text-3xl text-xl text-center'>We help you in step by step business setup process</h2>
            <p className='text-gray-700 text-center text-sm sm:text-base'>Enjoy 100% foreign ownership in UAE!</p>
            <div className='w-full flex flex-wrap justify-between gap-4'>
              <div className='flex gap-3 items-center'>
                <Lightbulb className='text-[#036B6D] sm:w-10 sm:h-10 w-8 h-8' />
                <p className='font-semibold text-gray-800 sm:text-base text-sm'>Strategic Guidance</p>
              </div>
              <div className='flex gap-3 items-center'>
                <ActivitySquare className='text-[#036B6D] sm:w-10 sm:h-10 w-8 h-8' />
                <p className='font-semibold text-gray-800 sm:text-base text-sm'>Bank Account Opening</p>
              </div>
              <div className='flex gap-3 items-center'>
                <FileStack className='text-[#036B6D] sm:w-10 sm:h-10 w-8 h-8' />
                <p className='font-semibold text-gray-800 sm:text-base text-sm'>Legal Compliance</p>
              </div>
              <div className='flex gap-3 items-center'>
                <Map className='text-[#036B6D] sm:w-10 sm:h-10 w-8 h-8' />
                <p className='font-semibold text-gray-800 sm:text-base text-sm'>Location Selection</p>
              </div>
            </div>
          </div>
        </section>
        {/* section six  */}
        <section className='mt-20 mb-10'>
          <div className='w-[90%] sm:w-[80%] mx-auto  flex flex-col gap-5 items-center'>
            <div className='flex gap-5 items-center flex-col sm:flex-row'>
              <div className='sm:w-1/2'>
                <h2 className='text-[#036B6D] uppercase font-semibold sm:text-3xl text-xl text-center'>Working with Government Agency</h2>
                <p className='text-gray-700 text-center text-sm sm:text-base'>for a Better Future</p>
              </div>
              <div className='sm:w-1/2'>
                <p className='text-sm text-gray-700 text-center sm:text-start'>Our association with ministers and government entities throughout the UAE enables us to secure swift government approvals for our clients. Our consultants collaborate closely with the Department of Economic Development and various other governmental bodies in the UAE to facilitate seamless and prompt company formation.</p>
              </div>
            </div>
            <div className='flex items-center gap-5 justify-center w-full flex-wrap'>
              <Image
                src="/assets/images/land-department.jpg" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/dubai-police.png" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/helth-authority.png" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/dubai-economy.jpg" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/dubai-courts.png" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/duqe.png" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/ifza.png" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/jafza.png" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/maydan.png" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/sharjah.png" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/dmcc.jpeg" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/kezad.jpeg" alt="logo"
                width={150}
                height={150}
              />
              <Image
                src="/assets/images/spc.jpeg" alt="logo"
                width={150}
                height={150}
              />
            </div>
            <div className='flex sm:gap-24 gap-12 flex-col sm:flex-row'>
              <Card className='border-2 border-[#036B6D]'>
                <CardHeader className='items-center'>
                  <ThumbsUp className='text-[#036B6D] sm:w-12 sm:h-12 w-10 h-10' />
                  <h3 className='font-semibold text-lg text-gray-900'>Benefits</h3>
                  <p className='text-lg text-center sm:text-right'>setting up of businesses in UAE</p>
                </CardHeader>
                <CardContent className='gap-10 flex flex-col justify-between'>
                  <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    {benefits.map((items, index) => <li key={index}>
                      {items}
                    </li>)}
                  </ul>
                  <Link href={'#form'}>
                    <Button className='bg-[#036B6D] w-full'>
                      Get Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className='border-2 border-[#036B6D]'>
                <CardHeader className='items-center'>
                  <ThumbsUp className='text-[#036B6D] sm:w-12 sm:h-12 w-10 h-10' />
                  <h3 className='font-semibold text-lg text-gray-900'>Why AB Capital?</h3>
                  <p className='text-lg text-center sm:text-right'>setting up of businesses in UAE</p>
                </CardHeader>
                <CardContent className='gap-10 flex flex-col'>
                  <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    {whyABC.map((items, index) => <li key={index}>
                      {items}
                    </li>)}
                  </ul>
                  <Link href={'#form'}>
                    <Button className='bg-[#036B6D] w-full'>
                      Free Consultation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className=' bg-gray-100 mt-20 py-10'>
          <div className='w-[90%] sm:w-[80%] mx-auto  flex flex-col gap-4'>
            <p className='text-gray-700 text-center text-sm sm:text-lg font-semibold'>Ready to take the next step in establishing your business in the UAE? Contact us today to discuss your company formation needs, and let us assist you in making your entrepreneurial dreams a reality.</p>
          </div>
        </section>
      </main>
      <div id='form'>
        <Footer />
      </div>
    </>
  )
}
