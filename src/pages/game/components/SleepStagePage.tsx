import { Button } from '@ui/button'

const SleepStagePage = () => {
  const instruction = {
    smallTeam: `1. Close your eyes. 
(Wait for everyone to do this.)
2. Fascists and Hitler, open your eyes and acknowledge each other.
(Take a moment to connect silently.)
3. Open your eyes.
(When everyone is ready, proceed.)`,
    bigTeam: `1. Close your eyes. 
    (Wait for everyone to do this.)
    2. Fascists who are NOT Hitler, open your eyes and acknowledge each other.
    (Take a moment to connect silently.)
    3. Hitler, keep your eyes closed but raise your hand
    4. Open your eyes.
    (When everyone is ready, proceed.)`
  }

  return (
    <>
      <main className="flex w-full flex-col items-center gap-4 px-6 pt-3 pb-[140px]">
        <span className="text-8xl">😴</span>
        <h2 className="text-center text-2xl font-medium">
          Get ready for the next stage!
          <br /> Instruction for All Players:
        </h2>
        <div>
          {instruction.smallTeam.split('\n').map((line, idx) => (
            <div key={idx} className="m-1 text-xl text-stone-500">
              {line.startsWith('(') && line.endsWith(')') ? (
                <i>{line}</i>
              ) : (
                line
              )}
            </div>
          ))}
        </div>
      </main>
      <footer className="fixed inset-x-0 bottom-0 z-10 flex flex-col items-center gap-2 bg-stone-100/90 p-6 pt-3 backdrop-blur-md">
        <Button className="max-w-134" size="mobile">
          Next
        </Button>
      </footer>
    </>
  )
}

export default SleepStagePage
