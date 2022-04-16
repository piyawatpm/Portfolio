import { useRouter } from "next/router";
function Catch() {
  const router = useRouter();
  const params = router.query.params as Array<string>;
  return (
    <>
      {params?.map((param: string, index: number) => {
        return (
          <div key={index}>
            <h1 className="text-3xl">{param}</h1>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default Catch;
