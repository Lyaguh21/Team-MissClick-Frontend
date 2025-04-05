import UserCard from "../ui/admin/UserCard";
import SearchBar from "../ui/admin/SearchBar";

export default function Info() {
  return (
    <div className="flex flex-col pl-10 pt-5 dark:text-white">
      <h1 className="text-4xl">Управление пользователями</h1>

      <section className="w-200 flex flex-col items-cetner gap-3 mt-4 overflow-y-scroll h-180 pb-10">
        <SearchBar />

        <UserCard
          user={{
            id: 1,
            login: "adminadmin",
            name: "иван иванович",
            createdAt: "5/4/2006",
            role: "admin",
          }}
        />
        <UserCard
          user={{
            id: 1,
            login: "adminadmin",
            name: "иван иванович",
            createdAt: "5/4/2006",
            role: "admin",
          }}
        />
        <UserCard
          user={{
            id: 1,
            login: "adminadmin",
            name: "иван иванович",
            createdAt: "5/4/2006",
            role: "admin",
          }}
        />
        <UserCard
          user={{
            id: 1,
            login: "adminadmin",
            name: "иван иванович",
            createdAt: "5/4/2006",
            role: "admin",
          }}
        />
        <UserCard
          user={{
            id: 1,
            login: "adminadmin",
            name: "иван иванович",
            createdAt: "5/4/2006",
            role: "admin",
          }}
        />
      </section>
    </div>
  );
}
