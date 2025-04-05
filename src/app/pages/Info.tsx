import Button from "../ui/global/Button";
import { FaPlus } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import PostTemplate from "../ui/Info/PostTemplate";
import { postsSlice } from "../model/store";
import { useEffect, useState } from "react";
import ModalWindow from "../ui/global/ModalWindow";
import CreateModal from "../ui/Info/CreateModal";

export default function Info() {

  const [createModal, setCreateModal] = useState<boolean>(false)

  const postSlice = postsSlice()

  useEffect(() => {postSlice.fetchPosts()}, [])

  return (
    <>
    <div className="px-[30px] flex flex-col h-[calc(100vh-74px)] overflow-y-scroll scroll ">
      <div className="py-[10px] lg:py-[30px] flex justify-between">
        <Button
          appearance="grayButton"
          className="flex gap-[14px] items-center"
          onClick={() => setCreateModal(true)}
        >
          <FaPlus />
          Создать статью
        </Button>
        <Button
          appearance="grayButton"
          className="flex gap-[14px] items-center"
        >
          <FaHistory />
          История изменений
        </Button>
      </div>
      <div className="h-[700px] lg:h-[855px] scroll gap-[6px] overflow-y-scroll inline-flex flex-wrap ">
        {postSlice.posts.map((post) => <PostTemplate id={Number(post.id)} title={post.title} content={post.content} author={post.lastEditor} createdAt={post.createdAt} image={post.image} key={post.id}/>)}
      </div>
    </div>
    <ModalWindow isShow={createModal}>
      <CreateModal setCreateModal={setCreateModal}/>
    </ModalWindow>
    </>
  );
}
