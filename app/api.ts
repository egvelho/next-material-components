import { link, getPages } from "@egvelho/next-material/api";
import HomeIcon from "@material-ui/icons/Home";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import EmailIcon from "@material-ui/icons/Email";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import type {
  BannerProps,
  BannerWithButtonProps,
  ItemListProps,
} from "@egvelho/next-material/components";

export const links = {
  index: link<
    {
      bannerProps: BannerProps;
      itemListProps: ItemListProps;
      bannerWithButtonProps: BannerWithButtonProps;
    },
    {}
  >("/", HomeIcon, "Home"),
  blog: link("/blog", RssFeedIcon, "Blog", "Acessar o blog"),
  contact: link("/#contato", EmailIcon, "Contato", "Realizar contato"),
  about: link("/#saiba-mais", ZoomInIcon, "Saiba mais"),
  admin: link("/admin", SupervisedUserCircleIcon, "Admin"),
};

export const pages = getPages(links);
