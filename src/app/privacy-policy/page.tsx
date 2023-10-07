import { MainLayout } from "@/layouts";
import { Hero } from "@/components";

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <Hero title="Privacy Policy" shrink />
      <div className="container mx-auto px-4 py-16 sm:py-28 max-w-[800px]">
        <div className="flex flex-col gap-4 font-light">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            consequuntur ipsa ratione ex culpa dicta ducimus natus animi
            reprehenderit porro nobis voluptatem aliquam alias eum illo aperiam
            maiores modi incidunt!
          </p>
          <h4 className="text-2xl font-medium">Lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            aut necessitatibus illum repellendus, fuga ipsa exercitationem
            laboriosam! Veritatis, quae soluta doloremque odit reprehenderit
            deserunt atque harum nam sit perspiciatis accusamus sapiente beatae
            exercitationem similique iste quis quo sunt cumque dolor, velit
            rerum molestiae! Dolore temporibus incidunt molestias corrupti iusto
            eveniet iure, placeat, quasi voluptates harum veniam numquam sequi,
            nobis aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            inventore animi vel. Architecto doloribus odio mollitia illum
            corrupti, modi aliquid.
          </p>
          <h4 className="text-2xl font-medium">
            Architecto doloribus odio mollitia
          </h4>
          <ul className="list-decimal list-inside">
            <li>amet consectetur</li>
            <li>doloribus odio</li>
            <li>quasi voluptates</li>
            <li>incidunt molestias</li>
          </ul>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            debitis magnam mollitia iure dolorum soluta ex, illum beatae enim
            aspernatur, eveniet sint nemo id natus.
          </p>
          <h4 className="text-2xl font-medium">Lorem ipsum dolor sit</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            aspernatur distinctio quos ab doloremque eveniet tempore
            voluptatibus ea debitis fuga officiis accusantium commodi, nam
            voluptatum iusto eum voluptas deserunt numquam amet mollitia
            voluptate laboriosam quaerat ullam nemo? Eveniet ullam laboriosam,
            modi inventore voluptatem fugit. Quasi, dolores veniam! Non ea
            delectus aliquam, praesentium optio esse earum. Quos, quisquam
            accusamus. Rem maiores, dolor velit ipsum impedit reiciendis optio
            asperiores sit itaque earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aut
            architecto dolorem atque mollitia eveniet nisi aliquam alias
            doloribus assumenda nostrum at perferendis, doloremque esse odit
            provident? Reprehenderit maxime placeat dolorem numquam earum
            explicabo labore!
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
