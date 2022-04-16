const Random = ({ person }: any) => {
  console.log(person);

  return <div>Random</div>;
};

export default Random;
export async function getServerSideProps() {
  if (process.env.RANDOM_NAME_API) {
    const res = await fetch(process.env.RANDOM_NAME_API);
    const data = await res.json();
    return {
      props: {
        person: data.results,
      },
    };
  }
}
