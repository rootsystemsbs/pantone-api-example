import { API, graphqlOperation } from "aws-amplify";
import {
  getBookQuery,
  getBetaBookQuery,
  getBooksQuery,
  getColorQuery,
  getBetaColorQuery,
  getColorsByCodeQuery,
  getClosestColorsQuery,
  getHarmonyQuery
} from "./queries";

export const getBook = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getBookQuery));
    if (data?.data) {
      return data.data.getBook;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getBetaBook = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getBetaBookQuery));
    if (data?.data) {
      return data.data.getBook;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getBooks = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getBooksQuery));
    if (data?.data) {
      return data.data.getBooks;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getColor = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getColorQuery));
    if (data?.data) {
      return data.data.getColor;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getBetaColor = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getBetaColorQuery));
    if (data?.data) {
      return data.data.getColor;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getColorsByCode = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getColorsByCodeQuery));
    if (data?.data) {
      return data.data.getColorsByCode;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getClosestColors = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getClosestColorsQuery));
    if (data?.data) {
      return data.data.getClosestColors;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export const getHarmony = async () => {
  try {
    const data = await API.graphql(graphqlOperation(getHarmonyQuery));
    if (data?.data) {
      return data.data.getHarmony;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.errors);
  }
};

export default {
  getBook,
  getBetaBook,
  getBooks,
  getColor,
  getColorsByCode,
  getClosestColors,
  getBetaColor,
  getHarmony
};
