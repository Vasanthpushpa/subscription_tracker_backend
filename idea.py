import asyncio, aiohttp, time

# === CONFIG ===
URL = "http://localhost:5500/api/v1/users/68496e9ac70ab7b9c6400521"
HEADERS = {
    "Authorization": (
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
        "eyJ1c2VySWQiOiI2ODQ5NmU5YWM3MGFiN2I5YzY0MDA1MjEiLCJpYXQiOjE3NTA0MTk5ODks"
        "ImV4cCI6MTc1MDUwNjM4OX0.mgnt-Qs1P3u2rF7PKuc7eXlCpSUL9NJKSQ_IBDad3rs"
    )
}
CONCURRENCY = 500    # max in‑flight requests
DURATION     = 15     # seconds to run

total_requests = successful = failed = 0

# === WORKER ==========================================================
async def hammer(session):
    global total_requests, successful, failed
    try:
        async with session.get(URL, headers=HEADERS, timeout=5) as resp:
            body = await resp.text()                # grab response text once
            total_requests += 1
            if resp.status == 200:
                successful += 1
            else:
                failed += 1
                print(f"[{resp.status}] {body[:200]}")  # print first 200 chars
    except Exception as e:
        total_requests += 1
        failed += 1
        print(f"[EXCEPTION] {e!r}")                   # prints the traceback’s message

# === LOAD‑GEN LOOP ===================================================
async def run():
    async with aiohttp.ClientSession() as session:
        deadline = time.time() + DURATION
        while time.time() < deadline:
            await asyncio.gather(*(hammer(session) for _ in range(CONCURRENCY)))

# === MAIN ============================================================
if __name__ == "__main__":
    print(f"🔥  Starting load test  → {URL}")
    print(f"⚙️  Concurrency: {CONCURRENCY}, Duration: {DURATION}s\n")
    start = time.time()
    try:
        asyncio.run(run())
    except KeyboardInterrupt:
        print("Stopped early by user.")
    finally:
        print("\n=== RESULTS ===")
        print(f"Total requests : {total_requests}")
        print(f"Success (200)  : {successful}")
        print(f"Failed / error : {failed}")
        print(f"Elapsed time   : {time.time() - start:.1f}s")
