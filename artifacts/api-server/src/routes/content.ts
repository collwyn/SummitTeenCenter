import { Router, type IRouter } from "express";
import {
  ListCommunityQuotesResponse,
  ListNewsPostsResponse,
  ListPartnersResponse,
  ListProgramsResponse,
} from "@workspace/api-zod";
import { communityQuotes, newsPosts, partnerTiers, programs } from "../lib/content";

const router: IRouter = Router();

router.get("/community/quotes", (_req, res) => {
  res.json(ListCommunityQuotesResponse.parse(communityQuotes));
});

router.get("/news/posts", (_req, res) => {
  res.json(ListNewsPostsResponse.parse(newsPosts));
});

router.get("/partners", (_req, res) => {
  res.json(ListPartnersResponse.parse(partnerTiers));
});

router.get("/programs", (_req, res) => {
  res.json(ListProgramsResponse.parse(programs));
});

export default router;
