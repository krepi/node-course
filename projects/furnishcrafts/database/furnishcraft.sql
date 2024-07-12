--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12
-- Dumped by pg_dump version 14.12

-- Started on 2024-07-12 09:41:16 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 854 (class 1247 OID 16549)
-- Name: project_status_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.project_status_enum AS ENUM (
    'open',
    'closed',
    'ordered'
);


ALTER TYPE public.project_status_enum OWNER TO postgres;

--
-- TOC entry 851 (class 1247 OID 16541)
-- Name: user_role_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.user_role_enum AS ENUM (
    'administrator',
    'standard',
    'premium'
);


ALTER TYPE public.user_role_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16572)
-- Name: category_compatibility; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category_compatibility (
    category_id integer NOT NULL,
    compatible_category_id integer NOT NULL
);


ALTER TABLE public.category_compatibility OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16467)
-- Name: element_categories; Type: TABLE; Schema: public; Owner: furnish
--

CREATE TABLE public.element_categories (
    category_id integer NOT NULL,
    category_name character varying(255) NOT NULL
);


ALTER TABLE public.element_categories OWNER TO furnish;

--
-- TOC entry 211 (class 1259 OID 16466)
-- Name: element_categories_category_id_seq; Type: SEQUENCE; Schema: public; Owner: furnish
--

CREATE SEQUENCE public.element_categories_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.element_categories_category_id_seq OWNER TO furnish;

--
-- TOC entry 3657 (class 0 OID 0)
-- Dependencies: 211
-- Name: element_categories_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: furnish
--

ALTER SEQUENCE public.element_categories_category_id_seq OWNED BY public.element_categories.category_id;


--
-- TOC entry 210 (class 1259 OID 16460)
-- Name: element_colors; Type: TABLE; Schema: public; Owner: furnish
--

CREATE TABLE public.element_colors (
    color_id integer NOT NULL,
    color_name character varying(255) NOT NULL
);


ALTER TABLE public.element_colors OWNER TO furnish;

--
-- TOC entry 209 (class 1259 OID 16459)
-- Name: element_colors_color_id_seq; Type: SEQUENCE; Schema: public; Owner: furnish
--

CREATE SEQUENCE public.element_colors_color_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.element_colors_color_id_seq OWNER TO furnish;

--
-- TOC entry 3658 (class 0 OID 0)
-- Dependencies: 209
-- Name: element_colors_color_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: furnish
--

ALTER SEQUENCE public.element_colors_color_id_seq OWNED BY public.element_colors.color_id;


--
-- TOC entry 214 (class 1259 OID 16474)
-- Name: elements; Type: TABLE; Schema: public; Owner: furnish
--

CREATE TABLE public.elements (
    id integer NOT NULL,
    color integer NOT NULL,
    category integer NOT NULL,
    width numeric(10,2) DEFAULT 0,
    length numeric(10,2) DEFAULT 0,
    depth numeric(10,2) DEFAULT 0,
    stock_amount integer DEFAULT 0 NOT NULL,
    price numeric(10,2) DEFAULT 0 NOT NULL,
    instalation_cost numeric(10,2) DEFAULT 0 NOT NULL,
    instalation_time interval DEFAULT '00:00:00'::interval NOT NULL
);


ALTER TABLE public.elements OWNER TO furnish;

--
-- TOC entry 213 (class 1259 OID 16473)
-- Name: elements_id_seq; Type: SEQUENCE; Schema: public; Owner: furnish
--

CREATE SEQUENCE public.elements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.elements_id_seq OWNER TO furnish;

--
-- TOC entry 3659 (class 0 OID 0)
-- Dependencies: 213
-- Name: elements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: furnish
--

ALTER SEQUENCE public.elements_id_seq OWNED BY public.elements.id;


--
-- TOC entry 219 (class 1259 OID 16523)
-- Name: project_elements; Type: TABLE; Schema: public; Owner: furnish
--

CREATE TABLE public.project_elements (
    project_id integer NOT NULL,
    element_id integer NOT NULL,
    quantity integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.project_elements OWNER TO furnish;

--
-- TOC entry 218 (class 1259 OID 16512)
-- Name: projects; Type: TABLE; Schema: public; Owner: furnish
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    user_id integer NOT NULL,
    start_date date NOT NULL,
    end_date date,
    status public.project_status_enum DEFAULT 'open'::public.project_status_enum,
    to_share boolean DEFAULT false
);


ALTER TABLE public.projects OWNER TO furnish;

--
-- TOC entry 217 (class 1259 OID 16511)
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: furnish
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projects_id_seq OWNER TO furnish;

--
-- TOC entry 3660 (class 0 OID 0)
-- Dependencies: 217
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: furnish
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- TOC entry 216 (class 1259 OID 16498)
-- Name: users; Type: TABLE; Schema: public; Owner: furnish
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role public.user_role_enum DEFAULT 'standard'::public.user_role_enum
);


ALTER TABLE public.users OWNER TO furnish;

--
-- TOC entry 215 (class 1259 OID 16497)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: furnish
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO furnish;

--
-- TOC entry 3661 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: furnish
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3465 (class 2604 OID 16470)
-- Name: element_categories category_id; Type: DEFAULT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.element_categories ALTER COLUMN category_id SET DEFAULT nextval('public.element_categories_category_id_seq'::regclass);


--
-- TOC entry 3464 (class 2604 OID 16463)
-- Name: element_colors color_id; Type: DEFAULT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.element_colors ALTER COLUMN color_id SET DEFAULT nextval('public.element_colors_color_id_seq'::regclass);


--
-- TOC entry 3466 (class 2604 OID 16477)
-- Name: elements id; Type: DEFAULT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.elements ALTER COLUMN id SET DEFAULT nextval('public.elements_id_seq'::regclass);


--
-- TOC entry 3476 (class 2604 OID 16515)
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- TOC entry 3474 (class 2604 OID 16501)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3651 (class 0 OID 16572)
-- Dependencies: 220
-- Data for Name: category_compatibility; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category_compatibility (category_id, compatible_category_id) FROM stdin;
\.


--
-- TOC entry 3643 (class 0 OID 16467)
-- Dependencies: 212
-- Data for Name: element_categories; Type: TABLE DATA; Schema: public; Owner: furnish
--

COPY public.element_categories (category_id, category_name) FROM stdin;
\.


--
-- TOC entry 3641 (class 0 OID 16460)
-- Dependencies: 210
-- Data for Name: element_colors; Type: TABLE DATA; Schema: public; Owner: furnish
--

COPY public.element_colors (color_id, color_name) FROM stdin;
\.


--
-- TOC entry 3645 (class 0 OID 16474)
-- Dependencies: 214
-- Data for Name: elements; Type: TABLE DATA; Schema: public; Owner: furnish
--

COPY public.elements (id, color, category, width, length, depth, stock_amount, price, instalation_cost, instalation_time) FROM stdin;
\.


--
-- TOC entry 3650 (class 0 OID 16523)
-- Dependencies: 219
-- Data for Name: project_elements; Type: TABLE DATA; Schema: public; Owner: furnish
--

COPY public.project_elements (project_id, element_id, quantity) FROM stdin;
\.


--
-- TOC entry 3649 (class 0 OID 16512)
-- Dependencies: 218
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: furnish
--

COPY public.projects (id, user_id, start_date, end_date, status, to_share) FROM stdin;
\.


--
-- TOC entry 3647 (class 0 OID 16498)
-- Dependencies: 216
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: furnish
--

COPY public.users (id, name, email, password, role) FROM stdin;
\.


--
-- TOC entry 3662 (class 0 OID 0)
-- Dependencies: 211
-- Name: element_categories_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: furnish
--

SELECT pg_catalog.setval('public.element_categories_category_id_seq', 1, false);


--
-- TOC entry 3663 (class 0 OID 0)
-- Dependencies: 209
-- Name: element_colors_color_id_seq; Type: SEQUENCE SET; Schema: public; Owner: furnish
--

SELECT pg_catalog.setval('public.element_colors_color_id_seq', 1, false);


--
-- TOC entry 3664 (class 0 OID 0)
-- Dependencies: 213
-- Name: elements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: furnish
--

SELECT pg_catalog.setval('public.elements_id_seq', 1, false);


--
-- TOC entry 3665 (class 0 OID 0)
-- Dependencies: 217
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: furnish
--

SELECT pg_catalog.setval('public.projects_id_seq', 1, false);


--
-- TOC entry 3666 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: furnish
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- TOC entry 3493 (class 2606 OID 16576)
-- Name: category_compatibility category_compatibility_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_compatibility
    ADD CONSTRAINT category_compatibility_pkey PRIMARY KEY (category_id, compatible_category_id);


--
-- TOC entry 3483 (class 2606 OID 16472)
-- Name: element_categories element_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.element_categories
    ADD CONSTRAINT element_categories_pkey PRIMARY KEY (category_id);


--
-- TOC entry 3481 (class 2606 OID 16465)
-- Name: element_colors element_colors_pkey; Type: CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.element_colors
    ADD CONSTRAINT element_colors_pkey PRIMARY KEY (color_id);


--
-- TOC entry 3485 (class 2606 OID 16486)
-- Name: elements elements_pkey; Type: CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.elements
    ADD CONSTRAINT elements_pkey PRIMARY KEY (id);


--
-- TOC entry 3491 (class 2606 OID 16528)
-- Name: project_elements project_elements_pkey; Type: CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.project_elements
    ADD CONSTRAINT project_elements_pkey PRIMARY KEY (project_id, element_id);


--
-- TOC entry 3489 (class 2606 OID 16517)
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- TOC entry 3487 (class 2606 OID 16505)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3498 (class 2606 OID 16534)
-- Name: project_elements element_fk; Type: FK CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.project_elements
    ADD CONSTRAINT element_fk FOREIGN KEY (element_id) REFERENCES public.elements(id);


--
-- TOC entry 3495 (class 2606 OID 16492)
-- Name: elements fk_category; Type: FK CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.elements
    ADD CONSTRAINT fk_category FOREIGN KEY (category) REFERENCES public.element_categories(category_id);


--
-- TOC entry 3499 (class 2606 OID 16577)
-- Name: category_compatibility fk_category; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_compatibility
    ADD CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES public.element_categories(category_id);


--
-- TOC entry 3494 (class 2606 OID 16487)
-- Name: elements fk_color; Type: FK CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.elements
    ADD CONSTRAINT fk_color FOREIGN KEY (color) REFERENCES public.element_colors(color_id);


--
-- TOC entry 3500 (class 2606 OID 16582)
-- Name: category_compatibility fk_compatible_category; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category_compatibility
    ADD CONSTRAINT fk_compatible_category FOREIGN KEY (compatible_category_id) REFERENCES public.element_categories(category_id);


--
-- TOC entry 3497 (class 2606 OID 16529)
-- Name: project_elements project_fk; Type: FK CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.project_elements
    ADD CONSTRAINT project_fk FOREIGN KEY (project_id) REFERENCES public.projects(id);


--
-- TOC entry 3496 (class 2606 OID 16518)
-- Name: projects user_fk; Type: FK CONSTRAINT; Schema: public; Owner: furnish
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


-- Completed on 2024-07-12 09:41:16 CEST

--
-- PostgreSQL database dump complete
--

