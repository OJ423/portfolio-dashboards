"use client"
import { CompanyData } from '@/utils/customer-data';

interface ContactViewProps {
  contacts: CompanyData[];
}

const ContactView: React.FC<ContactViewProps> = ({ contacts }) => {
  return(
    <>
    {contacts.length === 0 ? null 
    :
    
    <section className='flex flex-col w-full gap-12'>
      {/* COMPANY INFO */}
      <div className='p-4 border-solid border-2 border-gray-300 w-full rounded flex flex-col flex-wrap gap-4'>
        <p className='font-black text-blue-500'>COMPANY INFO</p>
        <div className='flex flex-row gap-8 items-end w-full'>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Company</p>
            <p className='font-bold text-3xl'>
              {contacts[0].company}
            </p>
          </div>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>ID</p>
            <p className='font-bold text-xl'>
              {contacts[0].id}
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-8 items-end w-full flex-wrap'>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Industry</p>
            <p className='font-bold text-xl'>
              {contacts[0].industry.length ?
                contacts[0].industry
                :
                "Unknown"
              }
            </p>
          </div>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Target Account</p>
            <p className='font-bold text-xl'>
              {contacts[0].targetAccount.length ? 
              <svg className='w-6 h-6 text-green' fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg> : 
              <svg className='w-6 h-6 text-red' fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              }
            </p>
          </div>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Employees</p>
            <p className='font-bold text-xl'>
              {contacts[0].employees.length ? 
                contacts[0].employees : 
                "Unknown"
              }
            </p>
          </div>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Revenue</p>
            <p className='font-bold text-xl'>
              {contacts[0].revenue > 0 ? 
                `$${contacts[0].revenue}` : 
                "Unknown"
              }
            </p>
          </div>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Raised Capital</p>
            <p className='font-bold text-xl'>
              {contacts[0].moneyRaised.length ? 
                `$${contacts[0].moneyRaised}` : 
                "Unknown"
              }
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT INFO */}

      <div className='p-4 border-solid border-2 border-gray-300 w-full rounded flex flex-col flex-wrap gap-4'>
        <p className='font-black text-blue-500'>CONTACT INFO</p>
        <div className='flex flex-row gap-8 items-end w-full'>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>CEO/Owner</p>
            <p className='font-bold text-3xl'>
              {contacts[0].owner ?
                contacts[0].owner :
                "Unknown"
              }
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-8 items-end w-full flex-wrap'>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Phone</p>
            <p className='font-bold text-xl'>
              {contacts[0].phone.length ?
                contacts[0].phone
                :
                "Unknown"
              }
            </p>
          </div>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Address</p>
            <p className='font-bold text-xl'>
              {contacts[0].streetAddress.length ? 
                contacts[0].streetAddress : 
                "Unknown"
              }
            </p>
          </div>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Region</p>
            <p className='font-bold text-xl'>
              {contacts[0].region.length ? 
                contacts[0].region : 
                "Unknown"
              }
            </p>
          </div>
          <div className='flex flex-col gap-0 text-left'>
            <p className='text-gray-500 text-sm'>Country</p>
            <p className='font-bold text-xl'>
              {contacts[0].country.length ? 
                contacts[0].country : 
                "Unknown"
              }
            </p>
          </div>
        </div>
      </div>

{/* PRODUCT INFO */}

    <div className='p-4 border-solid border-2 border-gray-300 w-full rounded flex flex-col flex-wrap gap-4'>
      <p className='font-black text-blue-500'>PRODUCT INFO</p>
      <div className='flex flex-row gap-8 items-end w-full flex-wrap'>
        <div className='flex flex-col gap-0 text-left'>
          <p className='text-gray-500 text-sm'>Domain</p>
          <p className='font-bold text-xl'>
            {contacts[0].domain.length ?
              contacts[0].domain :
              "Unknown"
            }
          </p>
      </div>
      <div className='flex flex-col gap-0 text-left'>
        <p className='text-gray-500 text-sm'>Account Tier</p>
        <p className='font-bold text-xl'>
          {contacts[0].tier.length ?
            contacts[0].tier :
            "Unknown"
          }
        </p>
      </div>
      <div className='flex flex-col gap-0 text-left'>
        <p className='text-gray-500 text-sm'>Primary Stack</p>
        <p className='font-bold text-xl'>
          {contacts[0].web_tech_01.length ?
            contacts[0].web_tech_01 :
            "Unknown"
          }
        </p>
      </div>
      <div className='flex flex-col gap-0 text-left'>
        <p className='text-gray-500 text-sm'>Secondary Stack</p>
        <p className='font-bold text-xl'>
          {contacts[0].web_tech_02.length ?
            contacts[0].web_tech_02 :
            "Unknown"
          }
        </p>
      </div>
      <div className='flex flex-col gap-0 text-left'>
        <p className='text-gray-500 text-sm'>Sub Components</p>
        <p className='font-bold text-xl'>
          {contacts[0].web_tech_03.length ?
            contacts[0].web_tech_03 :
            "Unknown"
          }
        </p>
      </div>
      <div className='flex flex-col gap-0 text-left'>
        <p className='text-gray-500 text-sm'>Other Products</p>
        <p className='font-bold text-xl'>
          {contacts[0].web_tech_04.length ?
            contacts[0].web_tech_04 :
            "Unknown"
          }
        </p>
      </div>
    </div>
  </div>

    </section>
  }  
  </>
  )
};

export default ContactView;