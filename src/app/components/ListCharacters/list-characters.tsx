import CardCharacter from "./components/card-character";

export default function ListCharacters() {
    return (
      <>
        <div className="my-5">
          <h1 className="pt-4">MEET THEIR CHARACTERS</h1>
        </div>
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
  