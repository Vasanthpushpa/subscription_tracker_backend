import asyncio
import aiohttp
import time

# === CONFIG ===
URL = "http://localhost:5500/api/v1/users/68496e9ac70ab7b9c6400521"
HEADERS = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODQ5NmU5YWM3MGFiN2I5YzY0MDA1MjEiLCJpYXQiOjE3NTA0MTk5ODksImV4cCI6MTc1MDUwNjM4OX0.mgnt-Qs1P3u2rF7PKuc7eXlCpSUL9NJKSQ_IBDad3rs"
}
CONCURRENCY = 5000000  # 🔥 Max concurrent requests (tune this)
DURATION = 15     # seconds

total_requests = 0
successful = 0
failed = 0

# === WORKER ===
async def hammer(session):
    global total_requests, successful, failed
    try:
        async with session.get(URL, headers=HEADERS, timeout=5) as response:
            await response.read()
            total_requests += 1
            if response.status == 200:
                successful += 1
            else:
                failed += 1
    except:
        total_requests += 1
        failed += 1

async def run():
    async with aiohttp.ClientSession() as session:
        end_time = time.time() + DURATION
        while time.time() < end_time:
            await asyncio.gather(*(hammer(session) for _ in range(CONCURRENCY)))

# === MAIN ===
if __name__ == "__main__":
    print(f"🔥 Starting powerful load test on: {URL}")
    print(f"⚙️ Concurrency: {CONCURRENCY}, Duration: {DURATION}s\n")
    start = time.time()
    try:
        asyncio.run(run())
    except KeyboardInterrupt:
        print("Stopped early.")
    finally:
        print("\n=== RESULTS ===")
        print(f"Total Requests: {total_requests}")
        print(f"Success (200):  {successful}")
        print(f"Failed:         {failed}")
        print(f"Duration:       {time.time() - start:.1f}s")
