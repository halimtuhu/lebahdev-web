import {
  LuComponent,
  LuLayers,
  LuLayoutGrid,
  LuMoveRight,
} from 'react-icons/lu'
import Link from 'next/link'

const Features = () => {
  return (
    <section id="features" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Fitur Layanan
            </span>
            <h2 className="my-4 text-4xl font-medium capitalize text-default-950">
              Layanan Kami
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center overflow-hidden rounded-md border border-default-200 md:grid-cols-2 xl:grid-cols-3">
          <div className="group border-default-200">
            <div className="p-8 sm:p-10">
              <span>
                <LuComponent className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                Static Web Development
              </h2>
              <p className="mb-6 text-base text-default-600">
                Pembuatan website statis untuk mengenalkan bisnis seperti profil perusahaan, event, jasa, produk, dan sebagainya
              </p>
            </div>
          </div>
          <div className="group border-default-200 xl:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuLayers className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                Web App Development
              </h2>
              <p className="mb-6 text-base text-default-600">
                Pembuatan aplikasi web untuk membantu bisnis dalam hal operasional, dasbor internal, penyajian data, penjualan dan sebagainya
              </p>
            </div>
          </div>
          <div className="group border-default-200 md:border-s">
            <div className="p-8 sm:p-10">
              <span>
                <LuLayoutGrid className="h-14 w-14 text-default-950" />
              </span>
              <h2 className="mb-4 mt-8 text-2xl font-medium text-default-950">
                IT Consultant
              </h2>
              <p className="mb-6 text-base text-default-600">
                Memberikan solusi yang tepat untuk kebutuhan bisnis secara spesifik dan merealisasikan solusi tersebut 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
