PGDMP                      |            SoftwareTestingCopilot    16.2 (Postgres.app)    16.0 3    \           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ]           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ^           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            _           1262    17094    SoftwareTestingCopilot    DATABASE     �   CREATE DATABASE "SoftwareTestingCopilot" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
 (   DROP DATABASE "SoftwareTestingCopilot";
                pritamkumarmondal    false            �            1259    17135    features    TABLE     �   CREATE TABLE public.features (
    id integer NOT NULL,
    product_id integer,
    title character varying(500),
    description character varying(10000),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.features;
       public         heap    pritamkumarmondal    false            �            1259    17134    features_id_seq    SEQUENCE     �   CREATE SEQUENCE public.features_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.features_id_seq;
       public          pritamkumarmondal    false    222            `           0    0    features_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.features_id_seq OWNED BY public.features.id;
          public          pritamkumarmondal    false    221            �            1259    17105    products    TABLE     �   CREATE TABLE public.products (
    id integer NOT NULL,
    tenant_id integer,
    title character varying(500),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.products;
       public         heap    pritamkumarmondal    false            �            1259    17104    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          pritamkumarmondal    false    218            a           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          pritamkumarmondal    false    217            �            1259    17097    tenants    TABLE        CREATE TABLE public.tenants (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.tenants;
       public         heap    pritamkumarmondal    false            �            1259    17096    tenants_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tenants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.tenants_id_seq;
       public          pritamkumarmondal    false    216            b           0    0    tenants_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.tenants_id_seq OWNED BY public.tenants.id;
          public          pritamkumarmondal    false    215            �            1259    17165 
   test_cases    TABLE       CREATE TABLE public.test_cases (
    id integer NOT NULL,
    user_story_id integer,
    title character varying(500),
    description character varying(10000),
    test_case character varying(20000),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.test_cases;
       public         heap    pritamkumarmondal    false            �            1259    17164    test_cases_id_seq    SEQUENCE     �   CREATE SEQUENCE public.test_cases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.test_cases_id_seq;
       public          pritamkumarmondal    false    226            c           0    0    test_cases_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.test_cases_id_seq OWNED BY public.test_cases.id;
          public          pritamkumarmondal    false    225            �            1259    17150    user_stories    TABLE     �   CREATE TABLE public.user_stories (
    id integer NOT NULL,
    feature_id integer,
    title character varying(500),
    description character varying(10000),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
     DROP TABLE public.user_stories;
       public         heap    pritamkumarmondal    false            �            1259    17149    user_stories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_stories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.user_stories_id_seq;
       public          pritamkumarmondal    false    224            d           0    0    user_stories_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.user_stories_id_seq OWNED BY public.user_stories.id;
          public          pritamkumarmondal    false    223            �            1259    17120    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    product_id integer,
    username character varying(500),
    role character varying(50),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public         heap    pritamkumarmondal    false            �            1259    17119    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          pritamkumarmondal    false    220            e           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          pritamkumarmondal    false    219            �           2604    17138    features id    DEFAULT     j   ALTER TABLE ONLY public.features ALTER COLUMN id SET DEFAULT nextval('public.features_id_seq'::regclass);
 :   ALTER TABLE public.features ALTER COLUMN id DROP DEFAULT;
       public          pritamkumarmondal    false    222    221    222            �           2604    17108    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          pritamkumarmondal    false    217    218    218            �           2604    17100 
   tenants id    DEFAULT     h   ALTER TABLE ONLY public.tenants ALTER COLUMN id SET DEFAULT nextval('public.tenants_id_seq'::regclass);
 9   ALTER TABLE public.tenants ALTER COLUMN id DROP DEFAULT;
       public          pritamkumarmondal    false    216    215    216            �           2604    17168    test_cases id    DEFAULT     n   ALTER TABLE ONLY public.test_cases ALTER COLUMN id SET DEFAULT nextval('public.test_cases_id_seq'::regclass);
 <   ALTER TABLE public.test_cases ALTER COLUMN id DROP DEFAULT;
       public          pritamkumarmondal    false    225    226    226            �           2604    17153    user_stories id    DEFAULT     r   ALTER TABLE ONLY public.user_stories ALTER COLUMN id SET DEFAULT nextval('public.user_stories_id_seq'::regclass);
 >   ALTER TABLE public.user_stories ALTER COLUMN id DROP DEFAULT;
       public          pritamkumarmondal    false    223    224    224            �           2604    17123    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          pritamkumarmondal    false    219    220    220            U          0    17135    features 
   TABLE DATA           R   COPY public.features (id, product_id, title, description, created_at) FROM stdin;
    public          pritamkumarmondal    false    222   2;       Q          0    17105    products 
   TABLE DATA           D   COPY public.products (id, tenant_id, title, created_at) FROM stdin;
    public          pritamkumarmondal    false    218   O;       O          0    17097    tenants 
   TABLE DATA           1   COPY public.tenants (id, created_at) FROM stdin;
    public          pritamkumarmondal    false    216   l;       Y          0    17165 
   test_cases 
   TABLE DATA           b   COPY public.test_cases (id, user_story_id, title, description, test_case, created_at) FROM stdin;
    public          pritamkumarmondal    false    226   �;       W          0    17150    user_stories 
   TABLE DATA           V   COPY public.user_stories (id, feature_id, title, description, created_at) FROM stdin;
    public          pritamkumarmondal    false    224   �;       S          0    17120    users 
   TABLE DATA           K   COPY public.users (id, product_id, username, role, created_at) FROM stdin;
    public          pritamkumarmondal    false    220   �;       f           0    0    features_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.features_id_seq', 1, false);
          public          pritamkumarmondal    false    221            g           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 1, false);
          public          pritamkumarmondal    false    217            h           0    0    tenants_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.tenants_id_seq', 1, false);
          public          pritamkumarmondal    false    215            i           0    0    test_cases_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.test_cases_id_seq', 1, false);
          public          pritamkumarmondal    false    225            j           0    0    user_stories_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.user_stories_id_seq', 1, false);
          public          pritamkumarmondal    false    223            k           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          pritamkumarmondal    false    219            �           2606    17143    features features_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.features DROP CONSTRAINT features_pkey;
       public            pritamkumarmondal    false    222            �           2606    17113    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            pritamkumarmondal    false    218            �           2606    17103    tenants tenants_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.tenants DROP CONSTRAINT tenants_pkey;
       public            pritamkumarmondal    false    216            �           2606    17173    test_cases test_cases_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.test_cases
    ADD CONSTRAINT test_cases_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.test_cases DROP CONSTRAINT test_cases_pkey;
       public            pritamkumarmondal    false    226            �           2606    17158    user_stories user_stories_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.user_stories
    ADD CONSTRAINT user_stories_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.user_stories DROP CONSTRAINT user_stories_pkey;
       public            pritamkumarmondal    false    224            �           2606    17128    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            pritamkumarmondal    false    220            �           2606    17144 !   features features_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.features
    ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);
 K   ALTER TABLE ONLY public.features DROP CONSTRAINT features_product_id_fkey;
       public          pritamkumarmondal    false    3505    222    218            �           2606    17114     products products_tenant_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id);
 J   ALTER TABLE ONLY public.products DROP CONSTRAINT products_tenant_id_fkey;
       public          pritamkumarmondal    false    3503    218    216            �           2606    17174 (   test_cases test_cases_user_story_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.test_cases
    ADD CONSTRAINT test_cases_user_story_id_fkey FOREIGN KEY (user_story_id) REFERENCES public.user_stories(id);
 R   ALTER TABLE ONLY public.test_cases DROP CONSTRAINT test_cases_user_story_id_fkey;
       public          pritamkumarmondal    false    224    226    3511            �           2606    17159 )   user_stories user_stories_feature_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_stories
    ADD CONSTRAINT user_stories_feature_id_fkey FOREIGN KEY (feature_id) REFERENCES public.features(id);
 S   ALTER TABLE ONLY public.user_stories DROP CONSTRAINT user_stories_feature_id_fkey;
       public          pritamkumarmondal    false    3509    222    224            �           2606    17129    users users_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT users_product_id_fkey;
       public          pritamkumarmondal    false    218    3505    220            U      x������ � �      Q      x������ � �      O      x������ � �      Y      x������ � �      W      x������ � �      S      x������ � �     