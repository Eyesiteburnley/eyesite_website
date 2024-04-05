import React from 'react'
import Image from 'next/image'

const DesignerService = () => {
  return (
    <section>
        <div className='flex w-full bg-blue-200 relative flex-col xl:w-1/2'>
            <h2 className='bold-40 lg:bold-64 pb-10'>We Offer Designer Eyewear</h2>
            <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur molestias voluptate eveniet dolorum ullam sapiente possimus, reiciendis saepe nemo accusamus fugiat illum voluptas! Voluptas modi delectus dolorum unde dolorem dolor neque ad fuga tempora illo praesentium exercitationem, totam accusantium laborum cum cupiditate perferendis nam vero? Incidunt iusto dicta esse quia.</p>
        </div>
        <div>
            <Image 
            />
        </div>
    </section>
  )
}

export default DesignerService
