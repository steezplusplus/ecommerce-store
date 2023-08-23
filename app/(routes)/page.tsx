import { Container } from "@/components/ui/container";

import { Billboard } from "./components/billboard";
import { getBillboard } from "@/actions/get-billboard";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard('30593471-0b8e-4bdb-8acf-02204a96eca1')
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
