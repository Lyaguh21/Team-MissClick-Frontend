import Button from "../ui/global/Button";
import { FaPlus } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import PostTemplate from "../ui/Info/PostTemplate";
import { postsSlice } from "../model/store";
import { useEffect, useState } from "react";
import ModalWindow from "../ui/global/ModalWindow";
import CreateModal from "../ui/Info/CreateModal";
<<<<<<< HEAD
import UpdateModal from "../ui/Info/UpdateModal";

interface IPostLess {
  id: string;
  title: string;
  content: string;
  image: string;
}
=======
import classNames from "classnames";
import { MdErrorOutline } from "react-icons/md";

export default function Info() {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [viewInfo, setViewInfo] = useState<boolean>(false);

<<<<<<< HEAD
  const [createModal, setCreateModal] = useState<boolean>(false)
  const [updateModal, setUpdateModal] = useState<boolean>(false)
  const [currentPost, setCurrentPost] = useState<IPostLess | null>(null)
=======
  const postSlice = postsSlice();
>>>>>>> c6174a7709ea4c064ae0c3942fd0e41e3d9a7a83

  useEffect(() => {
    postSlice.fetchPosts();
  }, []);

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
        <div
          className={classNames(
            "h-[700px] lg:h-[855px] scroll gap-[6px]   inline-flex flex-wrap ",
            {
              ["overflow-y-scroll"]: postSlice.posts.length > 3,
            }
          )}
        >
          {postSlice.posts.length === 0 && (
            <div className="w-full h-full flex gap-2.5 justify-center items-center dark:text-white">
              <MdErrorOutline className="size-[30px]" />
              <h2 className="text-[30px]">
                Ничего не найдено, попробуйте добавить новую статью
              </h2>
            </div>
          )}
          {postSlice.posts.length > 0 &&
            postSlice.posts.map((post) => (
              <PostTemplate
                id={Number(post.id)}
                title={post.title}
                content={post.content}
                author={post.lastEditor}
                createdAt={post.createdAt}
                image={post.image}
                key={post.id}
                onClick={() => setViewInfo(!viewInfo)}
              />
            ))}
        </div>
      </div>
<<<<<<< HEAD
      <div className="h-[700px] lg:h-[855px] scroll gap-[6px] overflow-y-scroll inline-flex flex-wrap ">
        {postSlice.posts.map((post) => <PostTemplate setCurrentPost={setCurrentPost} setUpdateModal={setUpdateModal} id={Number(post.id)} title={post.title} content={post.content} author={post.lastEditor} createdAt={post.createdAt} image={post.image} key={post.id}/>)}
      </div>
    </div>
    <ModalWindow isShow={createModal}>
      <CreateModal setCreateModal={setCreateModal}/>
    </ModalWindow>
    <ModalWindow isShow={updateModal}>
      {currentPost && <UpdateModal setUpdateModal={setUpdateModal} form={{title: currentPost!.title, content: currentPost!.content, img: currentPost!.image}} postid={currentPost!.id}/>}
    </ModalWindow>
=======
      <ModalWindow isShow={createModal}>
        <CreateModal setCreateModal={setCreateModal} />
      </ModalWindow>
    </>
  );
}
