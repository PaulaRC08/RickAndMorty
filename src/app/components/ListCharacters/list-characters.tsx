'use client';
import useCallServiceApi  from "./../../hooks/use-call-service-api";
import CardCharacter from "./components/card-character";

export default function ListCharacters() {
    const { loading, data, error } = useCallServiceApi();

    return (
      <>
        <div className="my-5">
          <h1 className="pt-4">MEET THEIR CHARACTERS</h1>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <CardCharacter
          name={'Paula'} 
          status={"Alive"} 
          species={"Human"} 
          gender={"Male"} 
          location={"Earth"} 
          numberChapters={"12"} />
      </>
    );
}
  